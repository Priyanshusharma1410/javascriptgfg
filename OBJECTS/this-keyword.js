//this keyword 
//refers to the object that is execuuting the function.
/*
const obj = {
    name: "priyanshu",
    age: 20,
    displaymessage: function (){
        //scope of this here is object. 
        console.log(this);
        console.log("hii " + this.name);//Implicit Binding
    }
}
obj.displaymessage();
console.log(this);//here scope tof this is window.
*/
/*
function displaySum (){
    console.log(this + " 9");//here this will refer window.
}
displaySum();
*/
/*
const user1 = {
    name:"priyanshu",
    showName : () => {
        console.log(user1.name);
        console.log(this.name);
        console.log(this);
    }
}
// arrow function does not point to object.
//In arrow function this will refer as global object like window object.
user1.showName();
*/
const user1 = {
    name:"priyanshu",
    showName: function(){
        console.log("hello " + this.name);//hello priyanshu
        function displayMessage(){
             console.log(this.name);//undefined
        }
        displayMessage();
    }
}
user1.showName();




