console.log("other data type");
var userInput;
userInput = "anything";
userInput = 5;
// this wont work but type any will
var useName;
// useName = userInput; error
// this block return never type
function generateErr(msg, code) {
    throw { message: msg, errorCode: code };
}
generateErr("Testing never type", 404);
