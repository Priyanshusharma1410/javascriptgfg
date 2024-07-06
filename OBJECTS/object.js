// objects --> {key : value}

const obj = {
    Name : "priyanshu",//property : internally js convert key to string.
    age : 20,
    job : "Web-Developer",
    course : ["html","css","js"],
    "is admin" : "true"
};
// acess property of object.
console.log(obj.course);
console.log(obj.job);
// 2nd way to acess object.
// in square bracket we pass property as string.
console.log(obj["Name"]);
// why we need square bracket.



