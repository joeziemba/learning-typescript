const e1 = {
    name: "Joe",
    privileges: ["create"],
    startDate: new Date(),
};
console.log(e1);
// Universal type must be number
// because that is the only type that intersects
let u;
function add(a, b) {
    // This is a Type Guard
    // it checks the types of union types and ensures
    // values are treated correctly based on their types
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printInfo(emp) {
    console.log("Name: " + emp.name);
    // Cannot check typeof for custom types
    // instead check for property existence as type guard
    if ("privileges" in emp)
        console.log("Name: " + emp.privileges);
}
class Car {
    drive() { }
}
class Truck {
    drive() { }
    load() { }
}
function useVehicle(vehicle) {
    vehicle.drive();
    // Type Guard for class instances
    if (vehicle instanceof Truck)
        vehicle.load();
}
function moveAnimal(animal) {
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
let div1 = document.getElementById("test");
let div2 = document.getElementById("test");
console.log(div1.value);
console.log(div2.value);
const errorBag = {
    email: "must be valid email",
};
let friends = ["Chris", "Hannah"];
// Not allowed by TS
friends[0].split("");
let friends2 = ["Chris", "Hannah"];
// This is allowed because TS now knows there will always be strings in there
friends[0].split("");
let result = new Promise((r, x) => {
    r("Hello World");
});
// Not allowed, TS doesn't now the return type of Promise
result.then((r) => r.includes("hello"));
let result2 = new Promise((r, x) => {
    r("Hello World");
});
// Allowed. TS knows promise will always return a string
result2.then((r) => r.includes("hello"));
