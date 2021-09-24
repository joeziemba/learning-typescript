# Classes & Interfaces

Classes are part of JavaScript, but Interfaces are a TypeScript feature.

## Object Oriented Programming (OOP)?

- Objects are pieces of code that represent real-world objects like `Product`, `User` or `Comment` that contain all the data and methods that would apply the that specific object.

```js
let comment = {
  : "wow typescript!",
  : 2021-09-24T01:45:30.678Z,
  : 1,
  : 1
};
```

## Classes

- Classes are the blueprints for an object, making it easier to create instances of an Object that all share the same behavior

```ts
class Comment {
  name: string; // class field
  text: string
  date: 
  userId;
  postId;

  constructor(name: string) {
    this.name = name;
  }
}

let dept1 = new Department("Accounting");

console.log(dept1.name);
// "Accounting"
```

- TypeScript provides a shortcut syntax for defining class fields

```ts
class Department2 {
  // TS will automatically compile this into a normal constructor
  constructor(public readonly id, private name: string, private employees: string[]) {}
}
```

- TypeScript provides `public`, `private`, `protected` and `readonly` access keywords for Class properties and methods
- `private` fields are only accessible within the class - not to classes that inherit it! Use `protected` to make fields usable by child classes, but still behave as private outside the class family.
- Inherit all a classes properties and methods using the `extend` keyword
- When extending a class, call `super()` in the child class's constructor to pass values to the parent constructor
- TS adds getters and setters to classes
- Getters are functions accessed like properties, not methods, and must return a value
- Setters are functions assigned like properties, not methods, and must take an argument
  - This is useful for encapsulating/adding/reusing validation logic for properties
- Static properties are accessed directly from the class, not on an instance of the class. (available in JS ans TS)
  - Math is an example of a class with static methods `Math.min()`

## Abstract Classes

- This is a way to describe methods that should exist, without specifying an implementations
- Cannot be instantiated, only inherited by other classes

```ts
abstract class Abstract {
  abstract printValue(value: string): void;
}

class Real extends Abstract {
  printValue(value: string) {
    console.log(value);
  }
}
```

## Singleton Pattern

- Enforce a single instance of a class by making the constructor private
- add an instance as a private property with a method that chaks for an instance and either creates one, or returns the one already created

```ts
class Static {
  private static instance: Static;
  static constructor() {}

  static getInstance() {
    if (Static.instance) return this.instance;
    this.instance = new Static();
  }
}
```

## Interfaces

- More like a custom type than a blueprint, like a class
- cannot have any initialized values, no constructors
- What's the difference between interfaces and custom types?
  - interfaces are more semantic, they describe objects
  - interfaces can be implemented by a class
- Classes can implement multiple interfaces, but inherit only one class
- Interfaces can extend other interfaces
- Can use optional properties and methods with a ? after the name

```ts
interface Person {
  name: string;
  age: number;
  gender?: "male" | "female";

  greet(phrase: string): void;
}
```
