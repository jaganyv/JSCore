let name1 = "Jagan";
let age = 21;

let intro = `Hello My name is ${name1} and i am ${age} years old`;
console.log(intro);

let poem = `Hello Roses,
i am jack ,
i am doing great,
glad to hear that`;
console.log(poem);

// For Each
let nums = [1, 2, 3, 4];

nums.forEach(function(n) {
  console.log(n * 2);
});

nums.forEach(n => console.log(n * 2));

// Maps
let num1 = [1,2,3];
let squared = num1.map(n=>n*n);
console.log(squared);

// Filters
let num2 = [1,2,3,4,5];
let filter = num2.filter(n=>n%2===0);
console.log(filter);