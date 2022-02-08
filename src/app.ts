console.log("other data type");

let userInput: unknown;
userInput = "anything";
userInput = 5;

// this wont work but type any will
let useName: string;
// useName = userInput; error

// this block return never type which will never return anythin
// an infinite loop is also of never return type
function generateErr(msg: string, code: number): never {
  throw { message: msg, errorCode: code };
}

generateErr("Testing never type", 404);
