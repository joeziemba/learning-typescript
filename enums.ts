// Instead of these patterns for global constants
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const ROLES = {
  ADMIN: 0,
  READ_ONLY: 1,
  AUTHOR: 2,
};

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
