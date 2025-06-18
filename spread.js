// Spread in Array

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let combined = [...arr1,...arr2];
console.log(combined);

// Spread in Object
let obj1 = {a:1};
let obj2 = {b:2};
let merged = {...obj1,...obj2};
console.log(merged);

// Rest in Function
function greetAll(fName,...others){
    console.log("Hello"+fName);
    console.log("Hello"+others);
}
greetAll("Jagan","Bala","Abi","Surya");

// Rest in arrays
let[first,...last] = [10,20,30,40];
console.log(first);
console.log(last);


