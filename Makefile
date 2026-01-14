# install wasm-pack :
install-wp:
	-cargo install wasm-pack

# build :
build:
	-cargo build
# build wasm :
build-wasm:
	-cd libs/simulation-wasm && wasm-pack build

# install npm packages:
install:
	-cd www && npm install

# run the project :
run:
	-cd www && npm run serve
