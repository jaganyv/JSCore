function myFunction(){
    console.log("Hello Bro");
}
myFunction();

function helloFunction(name){
   console.log("Hello"+name);
}
helloFunction("Jagan");

const add = (a,b)=>{
   return a+b;
};
console.log(add(10,20));

// one line arrow function
const square = n => n*n;
console.log(square(4));

// Callback demo
function display(name, callback) {
  console.log("Hi " + name);
  callback();
}
display("Bala", () => {
  console.log("Learning JavaScript is fun!");
});