#!/usr/bin/env bash
set -euo pipefail
PORT="${1:-8080}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)/output"

if [ ! -d "$ROOT" ]; then
  echo "✗ Output directory '$ROOT' does not exist. Run 'make build' first." >&2
  exit 1
fi

echo "▶ Attempting to serve $ROOT on http://localhost:$PORT (Ctrl+C to stop)…"
cd "$ROOT"

have_cmd() { command -v "$1" >/dev/null 2>&1; }

serve_with_python() {
  if python3 - <<'EOF'
import importlib.util
import sys
ok = importlib.util.find_spec('http') is not None and importlib.util.find_spec('http.server') is not None
sys.exit(0 if ok else 1)
EOF
  then
    echo "→ Using Python http.server"
    exec python3 -m http.server "$PORT"
  else
    return 1
  fi
}

serve_with_node() {
  if have_cmd node; then
    # Prefer npx serve if available
    if have_cmd npx && npx --yes serve -v >/dev/null 2>&1; then
      echo "→ Using 'npx serve' (Node)"
      exec npx --yes serve -l "$PORT" .
    fi
    # Fallback to a tiny embedded Node static server
    echo "→ Using embedded Node static server"
    exec node <<'EOF'
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = parseInt(process.env.PORT,10) || 8080;
const root = process.cwd();
const mime = {'.html':'text/html','.htm':'text/html','.css':'text/css','.js':'text/javascript','.json':'application/json','.xml':'application/xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.gif':'image/gif','.svg':'image/svg+xml','.ico':'image/x-icon','.txt':'text/plain'};
const server = http.createServer((req,res)=>{
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';
  const filePath = path.join(root, urlPath);
  if(!filePath.startsWith(root)) { res.writeHead(400); return res.end('Bad request'); }
  fs.stat(filePath,(err,st)=>{
    if(err || !st.isFile()) { res.writeHead(404); return res.end('Not found'); }
    const ext = path.extname(filePath).toLowerCase();
    res.setHeader('Content-Type', mime[ext]||'application/octet-stream');
    fs.createReadStream(filePath).pipe(res);
  });
});
server.listen(port,()=>console.log(`Serving ${root} on http://localhost:${port}`));
EOF
  else
    return 1
  fi
}

serve_with_busybox() {
  if have_cmd busybox; then
    if busybox httpd -h . -p "$PORT" >/dev/null 2>&1 & then
      echo "→ Using busybox httpd (no directory listing). PID $!"
      wait $!
    else
      return 1
    fi
  else
    return 1
  fi
}

if serve_with_python; then exit 0; fi
if serve_with_node; then exit 0; fi
if serve_with_busybox; then exit 0; fi

echo "✗ No suitable static server available (missing stdlib http + no node + no busybox)." >&2
echo "  Options:" >&2
echo "   - Install full Python: apt-get update && apt-get install -y python3-full" >&2
echo "   - Install Node:        apt-get update && apt-get install -y nodejs npm" >&2
echo "   - Install busybox:     apt-get update && apt-get install -y busybox" >&2
exit 2
