//When the result is influend by the external function then function is inpure.
/*
1. It takes an argument.
2. It should return something.
3. For same input you should get the same output.
4. The result should not be influenced by outer parameter.
5. It should not mutate the original argument.
*/
const x = 5;//when function is influenced by x then it become inpure function. 
function getDoubleValue(number){
    return number *2;//this is pure function.
}
function getDoubleValue(number){
    return number *2 * x;//this is inpure function.
}
const Result = getDoubleValue(3);
console.log(Result);
// this is pure function
function appendNumber(arr){
    let newArr = [];
    newArr.push(...arr, 5, 6);
    return newArr;
}
const result = appendNumber([1,2,3,4]);
console.log(result);