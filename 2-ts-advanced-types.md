# # Understanding TypeScript Part 2

- Intersection Types
- Type Guards
- Discriminated Unions
- Type Casting
- Function Overloads

## Intersection Types

Combine custom types using `&`

When intersecting Object types, it combines all the properties into one new Object type

```ts
type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
  name: "Joe",
  privileges: ["create"],
  startDate: new Date(),
}
```

When used with generic types, only the types in both are used in the new type

```ts
type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric
// Universal type must be number
// because that is the only type that intersects
```

## Type Guards

Type guards are conditional statements that check the type of variables that can be more than one type and ensure they are handled correctly for each type option

```ts
type Combinable = string | number
function add(a: Combinable, b: Combinable) {
  // Type Guard
  if (typeof a === "string" || typeof b === "string") {
    // If one is a string, handle as strings
    return a.toString() + b.toString()
  }
  // at this point, it is guaranteed they are both numbers
  return a + b
}
```

When working with custom Object types, using `typeof` isn't possible because JS will just type them as `object`. Instead, check for the existence of properties using the `in` keyword.

```ts
type UnknownEmployee = Employee | Admin

function printInfo(emp: UnknownEmployee) {
  console.log("Name: " + emp.name)

  // Type Guard for the property that only exists in one of the type options
  if ("privileges" in emp) console.log("Name: " + emp.privileges)
}
```

If working with Classes as a type, you can also use `instanceof`

```ts
class Car {
  drive() {}
}

class Truck {
  drive() {}
  load() {}
}

type Vehicle = Car | Truck

function useVehicle(vehicle: Vehicle) {
  vehicle.drive() // Both classes have a drive method

  // Type Guard to use methods specific to one class
  if (vehicle instanceof Truck) vehicle.load()
}
```

### Discriminated Union

- This pattern makes implementing type guards possible for Interfaces and custom types
- Give every interface/object a specific property to identify it in a type guard

```ts
interface Bird {
  type: "bird"
  flySpeed: number
}

interface Horse {
  type: "horse"
  runSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  let speed
  switch (animal.type) {
    case "bird":
      speed = animal.flySpeed
      break
    case "horse":
      speed = animal.runSpeed
      break
  }
  console.log("Moving with speed: " + speed)
}
```

## Type Casting

```ts
// Two ways of type casting
let div1 = <HTMLInputElement>document.getElementById("test")
let div2 = document.getElementById("test") as HTMLInputElement
```

## Index Properties

```ts
// This will be a container that holds errors from forms
// It should have properties for each field with an error
// key-value fieldname-errormessage
interface ErrorContainer {
  // Since we don't know every possible field name
  // we can set a type for the keys and values instead
  [key: string]: string
}

const errorBag: ErrorContainer = {
  email: "must be valid email",
}
```

## Function Overloads

- overloads help be explicit about return types when TS would not be able to do so on it's own

```ts
function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: Combinable, b: Combinable) {
  // This is a Type Guard
  // it checks the types of union types and ensures
  // values are treated correctly based on their types
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString()
  }

  return a + b
}
```

## Generic Types

- Generics let you type your types
- `Array` is a Generic you can then type `Array<string>`, `Array<number | boolean>`
- Promise is also a Generic that can be typed for the return value `Promise<string>`
- These are useful so TS will let you use the methods of JS types from other contexts

```ts
let friends = ["Chris", "Hannah"]
// Not allowed by TS
friends[0].split("")

let friends2: Array<string> = ["Chris", "Hannah"]
// This is allowed because TS now knows there will always be strings in there
friends[0].split("")

let result = new Promise((r, x) => {
  r("Hello World")
})
// Not allowed, TS doesn't now the return type of Promise
result.then((r) => r.includes("hello"))

let result2: Promise<string> = new Promise((r, x) => {
  r("Hello World")
})
// Allowed. TS knows promise will always return a string
result2.then((r) => r.includes("hello"))
```
