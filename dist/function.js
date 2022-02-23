"use strict";
console.log("function and types");
const add = (n1, n2) => n1 + n2;
let funcType;
funcType = add;
function handleCb(n1, n2, cb) {
    let result = n1 + n2;
    cb(result);
}
console.log(funcType(1, 2));
console.log(handleCb(1, 3, (result) => console.log(result)));
