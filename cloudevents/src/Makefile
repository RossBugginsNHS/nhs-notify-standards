# Makefile for all domain schemas - orchestrates subdomain Makefiles

DOMAINS = common examples supplier-allocation

.PHONY: build publish generate test deploy clean

build:
	@echo "=== Building all domains ==="
	@for domain in $(DOMAINS); do \
		echo ""; \
		$(MAKE) -C $$domain build || exit 1; \
	done
	@echo ""
	@echo "✅ All domains built successfully!"

publish:
	@echo "=== Publishing all domains ==="
	@for domain in $(DOMAINS); do \
		echo ""; \
		$(MAKE) -C $$domain publish || exit 1; \
	done
	@echo ""
	@echo "✅ All domains published successfully!"

generate:
	@echo "=== Generating events for all domains ==="
	@for domain in examples supplier-allocation; do \
		echo ""; \
		$(MAKE) -C $$domain generate || exit 1; \
	done
	@echo ""
	@echo "✅ All events generated successfully!"

test:
	@echo "=== Testing all domains ==="
	@FAILED=0; \
	for domain in examples supplier-allocation; do \
		echo ""; \
		$(MAKE) -C $$domain test || FAILED=1; \
	done; \
	if [ $$FAILED -eq 1 ]; then \
		echo ""; echo "❌ Some tests failed"; exit 1; \
	else \
		echo ""; echo "✅ All tests passed"; \
	fi

deploy:
	@echo "=== Deploying all domains ==="
	@for domain in $(DOMAINS); do \
		echo ""; \
		$(MAKE) -C $$domain deploy || exit 1; \
	done
	@echo ""
	@echo "✅ All domains deployed successfully!"

clean:
	@echo "=== Cleaning all domains ==="
	@for domain in $(DOMAINS); do \
		$(MAKE) -C $$domain clean; \
	done
	@echo ""
	@echo "✅ All domains cleaned!"
