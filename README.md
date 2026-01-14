# Oizo

This is a simulation of a 2D world where birds can seek food. Each generation, the birds with the best genes are selected to reproduce and create the next generation. The final goal is to see how birds evolve by looking at their behavior and their stats.

## Installation

You will need to have rust installed on your computer. You can install it by following the instructions on the [official website](https://www.rust-lang.org/tools/install).

Then, you can clone the repository and run the following command to start the simulation:

## How to run the project :

Install wasm-pack
```bash
    make install-wp 
```

Build rust libraries
```bash
    make build
```

Build the webAssembly binaries
```bash
    make build-wasm
```

Install npm packages
```bash
    make install
```

Run the project
```bash
    make run
```