console.log("function and types");

const add = (n1: number, n2: number) => n1 + n2;

let funcType: (a: number, b: number) => number; //is a fuc type with return number

funcType = add;

//function with cb
function handleCb(n1: number, n2: number, cb: (num: number) => void) {
  let result = n1 + n2;
  cb(result);
}

console.log(funcType(1, 2));

console.log(handleCb(1, 3, (result) => console.log(result)));
