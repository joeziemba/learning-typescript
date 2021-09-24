type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Joe",
  privileges: ["create"],
  startDate: new Date(),
};

console.log(e1);

// Usable with built-in types too
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
// Universal type must be number
// because that is the only type that intersects

let u: Universal;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  // This is a Type Guard
  // it checks the types of union types and ensures
  // values are treated correctly based on their types
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printInfo(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);

  // Cannot check typeof for custom types
  // instead check for property existence as type guard
  if ("privileges" in emp) console.log("Name: " + emp.privileges);
}

class Car {
  drive() {}
}

class Truck {
  drive() {}
  load() {}
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // Type Guard for class instances
  if (vehicle instanceof Truck) vehicle.load();
}

interface Bird {
  type: "bird";
  flySpeed: number;
}

interface Horse {
  type: "horse";
  runSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flySpeed;
      break;
    case "horse":
      speed = animal.runSpeed;
      break;
  }
  console.log("Moving with speed: " + speed);
}

let p = document.querySelector("p");
// Two ways of type casting
let div1 = <HTMLInputElement>document.getElementById("test");
let div2 = document.getElementById("test") as HTMLInputElement;
console.log(div1.value);
console.log(div2.value);

// This will be a container that holds errors from forms
// It should have properties for each field with an error
// key-value fieldname-errormessage
interface ErrorContainer {
  // Since we don't know every possible field name
  // we can set a type for the keys and values instead
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  email: "must be valid email",
};

let friends = ["Chris", "Hannah"];
// Not allowed by TS
friends[0].split("");

let friends2: Array<string> = ["Chris", "Hannah"];
// This is allowed because TS now knows there will always be strings in there
friends[0].split("");

let result = new Promise((r, x) => {
  r("Hello World");
});
// Not allowed, TS doesn't now the return type of Promise
result.then((r) => r.includes("hello"));

let result2: Promise<string> = new Promise((r, x) => {
  r("Hello World");
});
// Allowed. TS knows promise will always return a string
result2.then((r) => r.includes("hello"));
