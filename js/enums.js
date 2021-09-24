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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
let person = {
    name: "joe",
    age: 30,
    hobbies: ["coding", "dnd"],
    role: Role.ADMIN,
};
console.log(person.role);
