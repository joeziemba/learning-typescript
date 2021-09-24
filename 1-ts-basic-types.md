# Understanding TypeScript - Part 1

Notes from Understanding [TypeScript - 2021 Edition from Maximilian Schwazmuller](https://www.udemy.com/course/understanding-typescript/)

TypeScript is a superset of JavaScript. That means it can do everything JavaScript can do, plus some things it can't. The main and most known feature TypeScript adds is type checking.

## What is Type Checking?

All values in JavaScript have a type like `string`, `number` or `boolean`. Because JavaScript is a "dynamically typed" language, values of any type can be assigned and reassigned to any variable at any time and the program will infer types at run time.

TypeScript transforms JavaScript into a "type safe" language. With TS, when declaring a variable you also have to declare it's type and after that, only values of that type can be assigned.

```ts
// javascript
let four = "4"
four = 4 // Totally fine, no problems here

// typescript

let four: string = "4" // notice we declared this as a `string` variable
four = 4 // Type Error! Typescript won't assign a number to a string variable
```

Type safety helps keep your code more predictable and prevent runtime errors from unexpected values being passed around.

Variables can be typed when initialized and when declared as function parameters. If you assign a value to a variable when initializing, they don't _need_ to be typed, TS will infer and assign the type from the initial value

```ts
let four = 4 // `four` will automatically be a `number` type because it has a value
let five: number // `five` needs to be manually typed because it doesn't have a value yet
```

### `number`

- All numbers fall into this category - there are no other types for int, float, doubles etc.
- Remember, NaN and Infinity are both `number`s too!

### `string`

- all text values

### `boolean`

- true and false
- there are truthy/falsy values within this type

### `object`

- any JS object can be an object
- TS offers more specific ways to type objects based on constructors and properties
- variables shouldn't be initialized as plain `let thing: object` because TS will not allow any properties assigned to that object later
- objects initialized with key/values will result in inferred type declarations, or can be explicitly typed

  ```ts
  // explicitly typed variable
  let person: { name: string; age: number } = { name: "Joe", age: 30 }

  // untyped variables
  let person = { name: "Joe", age: 30 }
  //  In both cases the types will be the same
  //  name: string
  //  age: number
  ```

- TS also supports nested object typing

  ```ts
  let thing: {
    id: string
    price: number
    details: {
      title: string
      descrtion: string
    }
  }
  ```

### Array `type[]`

- Arrays are a type of object in JS, but can be specially typed in TS
- defined by type of values that can be in the array
  - `string[]`, `number[]`, `any[]`
- can define mixed arrays with union types
  - `(string | number)[]`
  - `(boolean | number)[]`
- TS will recognize array contents as correct types later in loops or calling methods like `.toUpperCase()`

### Tuple `[type, type]`

- Not a type in standard JS
- A fixed length Array with fixed value types
  ```ts
  let role: [number, string]
  ```
- WARNING: TS won't prevent pushing values to a tuple array if the pushed values are the correct type
  ```ts
  let example: [number, string] = [5, "five"]
  example.push("hello")
  console.log(example)
  // [5, 'five', 'hello']
  ```

### Enum

```ts
  // Instead of these patterns for global constants
  const ADMIN = 0;
  const READ_ONLY = 1;
  const AUTHOR = 2;

  const ROLES = {
  ADMIN: 0,
  READ_ONLY: 1,
  AUTHOR: 2,
  };delete

  // TS can use enums
  enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
  }

  let person = {
  name: "joe",
  age: 30,
  hobbies: ["coding", "dnd"],
  role: Role.ADMIN,
  };

  console.log(person.role);
  // 0
```

### Any

- mimics behavior of dynamic typing in vanilla JS
- good for initial quick code writing and experiments, but should be replaced at the end
- avoid leaving in final/production code

### Union Types

Union types allow a variable to be more than one type when used with primitive types. Using object

```ts
// Union type for single-value variables
varName: number | string

// Union type syntax for Arrays that can hold multiple types
varname: (type | type)[]
```

### Literal Types

- can be used to require a _specific_ string, number, etc. not just any value of that type
  ```ts
  // This function will ONLY accept the literal strings 'as-number'
  // or 'as-string' as a valid valid input. Nothing else
  function(ar1:number, ar2,setting: 'as-number' | 'as-string') {}
  ```

### Type Aliases

- Use the `type` keyword (specific to TypeScript) to define custom types for reusability

  ```ts
  // instead of
  function(
    ar1:number | string,
    ar2: number | string,
    setting: 'as-number' | 'as-string'
  ) {/*imp*/}

  // we can define aliases
  type Combinable = number | string;
  type Setting = "as-number" | "as-string";

  // and use those!
  function(
    ar1: Combinable,
    ar2: Combinable,
    setting: Setting
  ) {/*imp*/}
  ```

- custom types also work for objects
  ```ts
  type User = { name: string; age: number }
  const u1: User = { name: "Joe", age: 30 }
  ```

### Function Return Types

```ts
// TS will infer this function returns a number
function add(n1: number, n2: number) {
  return n1 + n2
}

// but can be explicitly assigned like this
function add(n1: number, n2: number): number {
  return n1 + n2
}

// functions that do not return should be type `void`
// to indicate it is *intentionally* not returning a value
function printResult(num: number): void {
  console.log("Result: " + num)
}

// Undefined is also a TS type that could be returned but
// should use void unless the function should explicitly
// return undefined. It requires you to return the literal value `undefined`
```

### Function as a Type

```ts
// this variable should be a function that returns a number
let combineValues: () => number

// this variable should be a function that takes 2 numbers and returns a number
let combineValues: (a: number, b: number) => number

// function takes 2 numbers and a callback function, which in turn takes a number and returns nothing
function combineAndCallback(a: number, b: number, callback: (num: number) => void) {
  callback(a + b)
}
```

- a `void` callback can still return things, but it should indicate that the return value is not used anywhere

### Unknown

- `unknown` behaves similar to `any` but adds an extra level of protection that `any` does not

```ts
let userInput: unknown
let userName: string

userInput = 5 // unknown behaves like any here
userInput = "Joe" // unknown behaves like any here

userName = userInput // Compilation Error
// Type `unknown` is not assignable to type `string`
// and `userInput` is still typed as `unknown`

if (typeof userInput === "string") {
  userName = userInput // No error
  // userInput is now guaranteed to be a string within this block
  // thanks to the if statement, so TS will allow it
  // this is called TYpe Gating and will be covered more later
}
```

### Never

- used for functions that will never return because the code stops executing
- throwing errors, infinite loops
- not part of original TS, added later
- functions will never be inferred as never, they are inferred as void
- use never when you want to to be clear the function explicitly should never return

```ts
// this function will `never` return because the `throw` crashes the code execution
function generateError(message: string, code: number) {
  throw { message, code }
}
```
