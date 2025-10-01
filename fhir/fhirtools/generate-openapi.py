#!/usr/bin/env python3
"""Generate an OpenAPI spec from the locally built FHIR IG artifacts.

Current scope:
 - Reads the CapabilityStatement (LettersServer) from ./v1/.
 - Reads referenced OperationDefinition resources for system-level operations.
 - Produces a focused OpenAPI 3.0.3 document describing the $submit-letter operation.

Future extension points:
 - Map resource type interactions (CRUD) if declared in CapabilityStatement.rest.resource[*].interaction
 - Pull profile canonical URLs into component schemas
 - Support multiple CapabilityStatements / versions

Usage:
  python fhirtools/generate-openapi.py \
      --cap v1/CapabilityStatement-LettersServer.json \
      --out openapi/letters-api.yaml

Assumptions:
 - Build artifacts (v1/) exist (run `make build` first if needed).
 - OperationDefinition JSON filename contains the operation name (case-insensitive) or is directly discoverable by canonical URL ending path segment.

"""
from __future__ import annotations
import argparse
import json
import re
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional

try:
    import yaml  # type: ignore
except Exception:
    print("PyYAML is required. Install with: pip install pyyaml", file=sys.stderr)
    raise

# --------------------------------------------------------------------------------------
# Helpers
# --------------------------------------------------------------------------------------

def load_json(path: Path) -> Dict[str, Any]:
    try:
        with path.open() as f:
            return json.load(f)
    except FileNotFoundError:
        sys.exit(f"File not found: {path}")


def find_operationdefinition(op_name: str, version_dir: Path) -> Path | None:
    """Locate an OperationDefinition JSON file containing the op name.

    Strategy:
      - Case-insensitive search for files named OperationDefinition-*.json in version_dir
      - Open and check 'resourceType' == OperationDefinition and code/name matches
    """
    pattern = re.compile(re.escape(op_name), re.IGNORECASE)
    for p in version_dir.glob('OperationDefinition-*.json'):
        try:
            data = load_json(p)
        except Exception:
            continue
        if data.get('resourceType') != 'OperationDefinition':
            continue
        code = data.get('code')
        name = data.get('name')
        if (code and pattern.fullmatch(code)) or (name and pattern.fullmatch(name)):  # exact match ignoring case
            return p
    return None


def fhir_version_from_cap(cap: Dict[str, Any]) -> str:
    return cap.get('fhirVersion', '4.0.1')


def ig_version_from_cap(cap: Dict[str, Any]) -> str:
    return cap.get('version', '0.0.0')


# --------------------------------------------------------------------------------------
# OpenAPI assembly
# --------------------------------------------------------------------------------------

def base_openapi(cap: Dict[str, Any]) -> Dict[str, Any]:
    title = cap.get('title') or 'FHIR Derived API'
    info_desc = [
        f"Generated from CapabilityStatement '{cap.get('id', '')}'.",
        "This OpenAPI description is a convenience abstraction over the FHIR operation(s) defined in the Implementation Guide.",
        "Refer to the canonical FHIR artifacts for normative definitions.",
    ]
    return {
        'openapi': '3.0.3',
        'info': {
            'title': title.replace('CapabilityStatement', 'API').strip(),
            'version': ig_version_from_cap(cap),
            'description': "\n\n".join(info_desc),
            'contact': {
                'name': (cap.get('publisher') or 'Unknown'),
            },
        },
        'servers': [
            {
                'url': 'https://{environment}.example.nhs.uk/fhir',
                'description': 'FHIR base URL',
                'variables': {
                    'environment': {
                        'default': 'sandbox',
                        'enum': ['sandbox', 'prod']
                    }
                }
            }
        ],
        'paths': {},
        'components': {
            'schemas': {}
        }
    }


def add_basic_schemas(components: Dict[str, Any]):
    schemas = components.setdefault('schemas', {})
    # Minimal skeleton schemas (not full FHIR!) to keep the spec concise.
    schemas.setdefault('OperationOutcome', {
        'type': 'object',
        'description': 'FHIR OperationOutcome (trimmed)',
        'properties': {
            'resourceType': {'type': 'string', 'enum': ['OperationOutcome']},
            'issue': {
                'type': 'array',
                'items': {
                    'type': 'object',
                    'properties': {
                        'severity': {'type': 'string'},
                        'code': {'type': 'string'},
                        'diagnostics': {'type': 'string'}
                    },
                    'required': ['severity', 'code']
                }
            }
        },
        'required': ['resourceType', 'issue']
    })
    schemas.setdefault('Bundle', {
        'type': 'object',
        'description': 'FHIR Bundle (transaction/collection) containing letter submission resources.',
        'properties': {
            'resourceType': {'type': 'string', 'enum': ['Bundle']},
            'type': {'type': 'string', 'enum': ['transaction', 'collection']},
            'entry': {
                'type': 'array',
                'items': {
                    'type': 'object',
                    'properties': {
                        'resource': {'type': 'object'}  # Intentionally loose; could be refined per profile.
                    },
                    'required': ['resource']
                }
            }
        },
        'required': ['resourceType', 'type']
    })


# --------------------------------------------------------------------------------------
# Profile -> Simplified OpenAPI Schema generation
# (Intentionally conservative – we only surface top-level required fields)
# --------------------------------------------------------------------------------------

TOP_LEVEL_PRIMITIVE_HINTS = {
    'status': {'type': 'string'},
    'category': {'type': 'array', 'items': {'type': 'object'}},
    'subject': {'type': 'object', 'description': 'Reference'},
    'recipient': {'type': 'array', 'items': {'type': 'object', 'description': 'Reference'}},
    'payload': {'type': 'array', 'items': {'type': 'object'}},
    'requester': {'type': 'object', 'description': 'Reference'},
    'sender': {'type': 'object', 'description': 'Reference'},
    'authoredOn': {'type': 'string', 'format': 'date-time'},
    'content': {'type': 'array', 'items': {'type': 'object'}},
    'contentType': {'type': 'string'},
    'description': {'type': 'string'},
    'securityContext': {'type': 'object'}
}


def safe_title_case(profile_id: str) -> str:
    parts = re.split(r'[-_]', profile_id)
    return ''.join(p.capitalize() for p in parts if p)


def load_profile_structure(version_dir: Path, profile_id: str) -> Optional[Dict[str, Any]]:
    cand = version_dir / f'StructureDefinition-{profile_id}.json'
    if cand.exists():
        try:
            return load_json(cand)
        except Exception:
            return None
    return None


def structure_to_schema(struct: Dict[str, Any]) -> Dict[str, Any]:
    base_type = struct.get('type', 'Resource')
    canonical = struct.get('url')
    differential = (struct.get('differential') or {}).get('element', [])
    required: List[str] = []
    properties: Dict[str, Any] = {
        'resourceType': {'type': 'string', 'enum': [base_type]},
    }
    # meta.profile enforcement (canonical)
    properties['meta'] = {
        'type': 'object',
        'properties': {
            'profile': {
                'type': 'array',
                'items': {'type': 'string'},
                'description': 'Profiles asserted for this resource',
                'example': [canonical] if canonical else None
            }
        }
    }

    for el in differential:
        path = el.get('path')  # e.g. CommunicationRequest.status
        if not path or '.' not in path:
            continue
        segments = path.split('.')
        if len(segments) != 2:
            # Skip nested for now (keep scope small)
            continue
        _, field = segments
        min_card = el.get('min')
        if min_card and isinstance(min_card, int) and min_card > 0:
            if field not in required and field not in ('meta',):
                required.append(field)
        # Provide a generic shape if not already present
        if field not in properties:
            hint = TOP_LEVEL_PRIMITIVE_HINTS.get(field, {'type': 'object'})
            properties[field] = hint

    schema: Dict[str, Any] = {
        'type': 'object',
        'description': struct.get('title') or struct.get('description') or base_type,
        'properties': properties,
        'required': sorted(set(['resourceType'] + required))
    }
    if canonical:
        schema['x-fhir-profile'] = canonical
    return schema


def add_profile_schemas(components: Dict[str, Any], version_dir: Path, profile_ids: List[str]) -> List[str]:
    added = []
    schemas = components.setdefault('schemas', {})
    for pid in profile_ids:
        struct = load_profile_structure(version_dir, pid)
        if not struct:
            print(f"Warning: Could not load StructureDefinition for profile id '{pid}'", file=sys.stderr)
            continue
        name = safe_title_case(pid)
        if name in schemas:
            continue
        schemas[name] = structure_to_schema(struct)
        added.append(name)
    return added


def make_specialized_bundle(components: Dict[str, Any], member_schema_names: List[str]):
    if not member_schema_names:
        return
    schemas = components.setdefault('schemas', {})
    schemas['LetterBundle'] = {
        'type': 'object',
        'description': 'Bundle constrained to letter submission resources (simplified).',
        'properties': {
            'resourceType': {'type': 'string', 'enum': ['Bundle']},
            'type': {'type': 'string', 'enum': ['transaction', 'collection']},
            'entry': {
                'type': 'array',
                'items': {
                    'type': 'object',
                    'properties': {
                        'resource': {
                            'oneOf': [{'$ref': f"#/components/schemas/{n}"} for n in member_schema_names]
                        }
                    },
                    'required': ['resource']
                }
            }
        },
        'required': ['resourceType', 'type', 'entry']
    }


def rewrite_bundle_refs_to_specialized(api: Dict[str, Any]):
    paths = api.get('paths', {})
    for pitem in paths.values():
        for method_obj in pitem.values():
            if not isinstance(method_obj, dict):
                continue
            rb = method_obj.get('requestBody')
            if not rb:
                continue
            content = rb.get('content', {})
            for mt, mt_obj in content.items():
                schema = mt_obj.get('schema')
                if isinstance(schema, dict) and schema.get('$ref') == '#/components/schemas/Bundle':
                    schema['$ref'] = '#/components/schemas/LetterBundle'


def operation_to_openapi_path(od: Dict[str, Any]) -> Dict[str, Any]:
    code = od.get('code')
    if not code:
        raise ValueError('OperationDefinition missing code')

    # Determine request & response
    in_params = [p for p in od.get('parameter', []) if p.get('use') == 'in']
    out_params = [p for p in od.get('parameter', []) if p.get('use') == 'out']

    request_body: Dict[str, Any] | None = None
    if len(in_params) == 1 and in_params[0].get('type') == 'Bundle':
        request_body = {
            'required': True,
            'content': {
                'application/fhir+json': {
                    'schema': {'$ref': '#/components/schemas/Bundle'}
                }
            }
        }
    elif in_params:
        # Fallback: generic object
        request_body = {
            'required': True,
            'content': {
                'application/json': {
                    'schema': {'type': 'object'}
                }
            }
        }

    # Responses: if single OperationOutcome, use 200; else try to map
    responses: Dict[str, Any] = {
        '400': {
            'description': 'Client error',
            'content': {'application/fhir+json': {'schema': {'$ref': '#/components/schemas/OperationOutcome'}}}
        },
        '500': {
            'description': 'Server error',
            'content': {'application/fhir+json': {'schema': {'$ref': '#/components/schemas/OperationOutcome'}}}
        }
    }

    if len(out_params) == 1 and out_params[0].get('type') == 'OperationOutcome':
        responses['200'] = {
            'description': 'Operation successful (OperationOutcome)',
            'content': {
                'application/fhir+json': {
                    'schema': {'$ref': '#/components/schemas/OperationOutcome'}
                }
            }
        }
    elif out_params:
        responses['200'] = {
            'description': 'Operation successful',
            'content': {'application/json': {'schema': {'type': 'object'}}}
        }
    else:
        responses['204'] = {'description': 'No content'}

    summary = od.get('title') or od.get('name') or code
    description_parts = [od.get('description', '').strip()]
    canonical = od.get('url')
    if canonical:
        description_parts.append(f"Canonical OperationDefinition: {canonical}")

    post_op = {
        'summary': summary,
        'operationId': re.sub(r'[^A-Za-z0-9_]', '_', code),
        'description': "\n\n".join([p for p in description_parts if p]),
        'tags': ['Letters'],
        'responses': responses
    }
    if request_body:
        post_op['requestBody'] = request_body

    return {f'/${code}': {'post': post_op}}


def integrate_operations(cap: Dict[str, Any], version_dir: Path, api: Dict[str, Any]):
    paths = api.setdefault('paths', {})
    rest_list = cap.get('rest', [])
    for rest in rest_list:
        for op in rest.get('operation', []):
            code = op.get('name')
            if not code:
                continue
            od_path = find_operationdefinition(code, version_dir)
            if not od_path:
                print(f"Warning: OperationDefinition file not found for {code}", file=sys.stderr)
                continue
            od = load_json(od_path)
            path_item = operation_to_openapi_path(od)
            # Merge path (in case of collisions later)
            for k, v in path_item.items():
                if k in paths:
                    paths[k].update(v)
                else:
                    paths[k] = v


# --------------------------------------------------------------------------------------
# CLI
# --------------------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description='Generate OpenAPI from FHIR CapabilityStatement + OperationDefinitions')
    parser.add_argument('--cap', required=True, help='Path to CapabilityStatement JSON (built artifact)')
    parser.add_argument('--out', required=True, help='Output OpenAPI YAML path')
    parser.add_argument('--version-dir', default='v1', help='Directory containing built FHIR artifacts (default: v1)')
    parser.add_argument('--profile-ids', nargs='*', default=[], help='Profile ids to include as specialized component schemas (e.g. nhsnotify-letter-communicationrequest nhsnotify-letter-documentreference nhsnotify-letter-binary)')
    args = parser.parse_args()

    cap_path = Path(args.cap)
    version_dir = Path(args.version_dir)
    out_path = Path(args.out)

    cap = load_json(cap_path)
    api = base_openapi(cap)
    add_basic_schemas(api['components'])
    added = add_profile_schemas(api['components'], version_dir, args.profile_ids)
    if added:
        make_specialized_bundle(api['components'], added)
        rewrite_bundle_refs_to_specialized(api)
        # Record provenance in info.description
        prof_note = f"Profiles represented (simplified schemas): {', '.join(added)}"
        api['info']['description'] += f"\n\n{prof_note}"
    integrate_operations(cap, version_dir, api)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    with out_path.open('w') as f:
        yaml.safe_dump(api, f, sort_keys=False)

    print(f"Wrote OpenAPI spec -> {out_path}")

if __name__ == '__main__':
    main()
