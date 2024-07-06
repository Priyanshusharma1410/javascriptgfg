function greatMessage(){
    function Wrapper(){
        let name = "priya";
        console.log(name, "welcome to GFG!!!");
    }
    return Wrapper;
}
const output = greatMessage();
console.log(output());