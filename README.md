
# TypeScript Exercises - Procedural & OOP Practice

This repository contains exercises in **TypeScript** designed to help improve your skills in both **procedural programming** and **object-oriented programming (OOP)**.

## About

- Implementations use **Node.js** runtime with **TypeScript**.
- Focus on practicing programming concepts through hands-on exercises.
- Exercises cover fundamental logic, data structures, classes, interfaces, generics, and more.
- Ideal for learning TypeScript syntax and OOP principles in a practical way.

## Folder Structure

- `/procedure` — Exercises with procedural logic style
- `/poo` — Exercises using object-oriented programming (classes, interfaces, inheritance, etc.)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed (version 16 or above recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- TypeScript and ts-node installed globally or locally:

```bash
npm install -g typescript ts-node
```

### Running Exercises

You can run individual exercises using `node` with the `ts-node` loader.

Example:

```bash
node --no-warnings --loader ts-node/esm poo/20-repository.ts
node --no-warnings --loader ts-node/esm 01.ts
```

Alternatively, run all exercises in a folder using the provided npm scripts:

```bash
npm run run:procedure
npm run run:poo
```

Or run all exercises:

```bash
npm run run:all
```

*(Scripts assume a Windows environment. Adjust accordingly for your OS.)*

## How to Contribute

Feel free to open issues or submit pull requests with improvements, fixes, or new exercises.

## License

This project is open source and available under the MIT License.
