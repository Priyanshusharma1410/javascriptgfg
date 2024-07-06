// Object Refrence & Shallow copy.
// Objects are not copy by value its copy by refrence.refrence==>memory.

//shallow copy 
// const person1 = {
//     name: "yash",
//     age:  34,    
// } 

// const person2 = person1;

// person1.age = "100";
// person2.name = "priyanshu";

// console.log(person2);
// console.log(person1);

const person1 = {
    name: "yash",
    age:  34,    
    adress: {
        city: "Mumbai",
        state: 'MH'
    }
} 
// assign object inside object is also shallow copy.
const person2 = Object.assign({},person1);

person1.adress.city ="Indore";
person2.name = "priyanshu";
console.log(person1);
console.log(person2); 
 