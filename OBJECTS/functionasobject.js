//Function as Oject Property

const obj = {
    name : "priyanshu Sharma",
    welcome : function (){
        console.log("welcome jii");
    },
    sum (){ //inside obj function without key. or we can say sum is the key.
        console.log (3 + " plus " + 4);
    }

};
// console.log(obj);
// console.log(obj.welcome);
// console.log(typeof(obj.welcome));
// console.log(obj.welcome());
console.log(obj.sum());