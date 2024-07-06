/*
new Keyword and constructor functions
**constructor functions technically are regular functios.
They have 2 conventions through They are named with capital letter first.
They should be executed only with "new" operator.
*/
/*
function User() {
    console.log(this);//here this behave as User object due to "new" keyword .
    (this.name ="raj"), (this.age = 100)
}
const user1 = new User();
console.log(user1.name);
*/
function User (name, age){
    (this.name= name), (this.age= age);
}
const user1 = new User("lisa",89);
const user2 = new User("mahima",99);
const user3 = new User("ranu",99.99);

console.log(user1);
console.log(user2);
console.log(user3);




