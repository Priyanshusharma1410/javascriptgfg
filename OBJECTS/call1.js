// Function Borrowing - Call, Apply and Blind

const user1 = {
    name:"shubham",
    age: 33,
    showMessage: function () {
        console.log(this.age);//Implicite binding
    }
}
user1.showMessage();
const user2 = {
    name:"sakshi",
    age: 35
}
const user3 = {
    name:"saturo",
    age: 38
}
function sayhi(degree, year){
    console.log(this.name, degree, year);
    // console.log(this.age);
}

/**  Explicit Binding **/
//user1.sayhi(); Error - access name outside the object using function.
// sayhi.call(user1 , "B.TECH-ECE",2015 );
// the value of this is user1
// sayhi.call(user2 ,"B.TECH-CS",2018 );
// the value of this is user2
// sayhi.call(user3);
// the value of this is user3

//when we use apply we need to pass value of parameter in form of array.
// sayhi.apply(user1, ["B.TECH-ECE",2015]);
// sayhi.apply(user2,  ["B.TECH-CS",2018]);
// sayhi.apply(user3);

//we need to store bind in variable  .
const result = sayhi.bind(user1," B.TECH-CS " )
result(2022);
