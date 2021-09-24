# Learning TypeScript

Notes compiled from courses and online examples by Joe Ziemba.

Most of the content lives in the markdown files, but there are example typescript files with examples for experimentation.

## Setup

To actually use the typescript files, you need to install the dependencies:

```console
npm i
```

TypeScript **has** to be compiled down to regular JavaScript, it cannot run in browsers. TypeScript's built-in compiler handles this for us and can also be configured using `tsconfig.json`.

This project is set up to output es6, but it can also output es5 - just change the `target` in `tsconfig.json`. More about tsconfig can be found in [TypeScript's Docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

To compile the code, use the `npm run compile` command. This will compile all `.ts` files in the project to a `./js/` directory. It will likely error initially, because there are examples demonstrating _wrong_ typescript in the code.
