"use strict";
console.log("Specifics data type in ts");
const person = {
    name: "Laue",
    height: 10,
    hobbies: ["racing", "reading"],
    roles: [1, "author"],
};
var Level;
(function (Level) {
    Level[Level["ADMIN"] = 0] = "ADMIN";
    Level[Level["AUTHOR"] = 1] = "AUTHOR";
})(Level || (Level = {}));
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
let level = 0;
if (level === Level.ADMIN) {
    console.log("is Admin enum");
}
