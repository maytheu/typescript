"use strict";
console.log("other data type");
let userInput;
userInput = "anything";
userInput = 5;
let useName;
function generateErr(msg, code) {
    throw { message: msg, errorCode: code };
}
generateErr("Testing never type", 404);
