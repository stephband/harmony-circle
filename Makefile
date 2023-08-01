DEBUG=

# Tell make to ignore existing folders and allow overwriting existing files
.PHONY: modules

modules:
	rm -rf ./build
	deno run --allow-read --allow-env --allow-net --allow-write --allow-run ../fn/deno/make-modules.js ./build/ ./module.css ./module.js ./harmony-circle/module.js ./harmony-circle/module.css
