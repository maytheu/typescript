"use strict";
console.log("other data type");
let userInput;
userInput = "anything";
userInput = 5;
// this wont work but type any will
let useName;
// useName = userInput; error
// this block return never type which will never return anythin
// an infinite loop is also of never return type
function generateErr(msg, code) {
    throw { message: msg, errorCode: code };
}
generateErr("Testing never type", 404);
