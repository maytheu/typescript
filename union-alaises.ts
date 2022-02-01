console.log("combining more than one data type");

type numStr = number | string; //sore data types in type alaises

const combine = (input1: numStr, input2: numStr) => {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};
const combinedAges = combine(52, 25);
console.log(combinedAges);

const combinedNames = combine("Laue", "Meto");
console.log(combinedNames);
