// property Existance.
const obj = {
    Student : "priyanshu",
    Class : "12th"
}
obj.grade="A";
// const is
// const isPropertyFound = "age" in obj;
// const Pfound = "Student" in obj;
// console.log(Pfound);
// console.log(isPropertyFound);
for(let key in obj){
    console.log(key , obj[key])//here . gives you undefined.
} 
