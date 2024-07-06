//optionsl chaining --> ?.
// undefined.Something gives Error.
const obj = {
    name: "priyasnshu",
    age: 20,
    address: {
        city: "MP",
        state: "Indore"
    },
    getDispalyMessage: function(){
        console.log("welcome priyanshu");

    }
}
// console.log(obj.address.city);

// solution 1
// if(obj.address !== undefined){
//     console.log(obj.address.state);
// }else{
//     console.log("address not found");
// }     
// solution 2 - optional chaining.
console.log(obj.address?.state);//undefined.

console.log(obj.getDispalyMessage());
obj.getDispalyaddress?.();
 