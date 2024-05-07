# Oizo

This project is based on [Learn To Fly](https://pwy.io/posts/learning-to-fly-pt1/) a course to learn genetic algorithms and neural networks.

## Presentation

This is a simulation of a 2D world where birds can seek food. Each generation, the birds with the best genes are selected to reproduce and create the next generation. The final goal is to see how birds evolve by looking at their behavior and their stats.

## Installation

You will need to have rust installed on your computer. You can install it by following the instructions on the [official website](https://www.rust-lang.org/tools/install).

Then, you can clone the repository and run the following command to start the simulation:

```bash
 cargo install wasm-pack
 cargo build
 cd libs/simulation-wasm && wasm-pack build
 cd ../../www && npm install && npm run start
```

If your version of Node is up to date (which is very probable), you will need to run this command instead :

```bash
    npm run older
```
