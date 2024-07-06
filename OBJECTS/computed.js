// adding property to Objects.
const readlineSync = require("readline-sync");
const key = readlineSync.question("what do you want to know about me (name/age/city/state) -");

const obj = {
    name : "Yash",
    age : 37
}
obj.city = "M.P.";
obj.state = "Indore";
console.log(obj);

