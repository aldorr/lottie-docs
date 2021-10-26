# Executable names
PIP ?= pip
PYTHON ?= python
MKDOCS ?= PYTHONPATH="$(SOURCE_DIR)/extensions" mkdocs

# Paths
SOURCE_DIR = $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
OUTPUT_DIR ?= $(CURDIR)/site

.PHONY: all install_dependencies docs docs_serve lottie.schema.json validate


all: docs

lottie.schema.json:$(SOURCE_DIR)/docs/schema/lottie.schema.json

$(SOURCE_DIR)/docs/schema/lottie.schema.json: $(wildcard $(SOURCE_DIR)/docs/schema/**/*.json)
$(SOURCE_DIR)/docs/schema/lottie.schema.json: $(SOURCE_DIR)/tools/schema-merge.py
	$(SOURCE_DIR)/tools/schema-merge.py

docs:$(SOURCE_DIR)/docs/schema/lottie.schema.json
	$(MKDOCS) build -f $(SOURCE_DIR)/mkdocs.yml -d $(OUTPUT_DIR)

docs_serve:$(SOURCE_DIR)/docs/schema/lottie.schema.json
	$(MKDOCS) serve -f $(SOURCE_DIR)/mkdocs.yml

install_dependencies:
	$(PIP) install -r $(SOURCE_DIR)/requirements.txt

validate: $(SOURCE_DIR)/docs/schema/lottie.schema.json
	$(SOURCE_DIR)/tools/schema-validate.py
