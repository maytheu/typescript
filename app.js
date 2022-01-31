console.log("Specifics data type in ts");
var person = {
    name: "Laue",
    height: 10,
    hobbies: ["racing", "reading"]
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
