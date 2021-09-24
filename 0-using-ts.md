# Using TypeScript

TypeScript **has** to be compiled down to regular JavaScript, it cannot run in browsers. TypeScript's built-in compiler handles this for us and can also be configured using a `tsconfig.json`.

By default typescript will output ES5 javascript, but it can be set to output ES6 if you don't need to support older browsers like Internet Explorer.

## Using the compiler

```console
npm i -g typescript
tsc "./app.js"      // compile a single file
tsc --project "./tsconfig.json"     // compile using a config
```

This project includes typescript as a dependency and a has an `npm run compile` command that will compile all `.ts` files in the project. It will likely error, because there are examples demonstrating _wrong_ typescript in the code.
