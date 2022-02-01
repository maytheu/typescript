console.log("Specifics data type in ts");

const person: {
  name: string;
  height: number;
  hobbies: string[];
  roles: [number, string]; //defining tuple with 2 element array
} = {
  name: "Laue",
  height: 10,
  hobbies: ["racing", "reading"],
  roles: [1, "author"],
};

enum Level {
  ADMIN,
  AUTHOR,
} //you can add ADMIN=5

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

let level = 0;

if (level === Level.ADMIN) {
  console.log("is Admin enum");
}
