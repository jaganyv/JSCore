// function toCelsius(fahrenheit){
//     return(5/9) * (fahrenheit-32);
// }
// let value = toCelsius(77);
// console.log(value);

// function carName(){
//     let carName = "Volvo";
//     console.log(carName);
// }
// carName();

// // Objects 
// const car = new Object();
// car.name1 = "Ferrari";
// car.model = 2021;
// car.price = 200000;

// console.log(car.price);

// // const person = {
// //     name1 : "Jagan",
// //     age : 20,
// //     technology : "Java Full Stack"
// // };
// // console.log(person.name1);

// const person = {
//     firstName : "Jagan",
//     lastName : "Yadav",
//     currentAge : 20,
//     currentStack : "Java Full Stack",
//     fullName : function(){
//         return this.firstName+" "+this.lastName;
//     }
// };
// console.log(person.fullName());

// let age = 20;
// let isStudent = true;

// console.log(age > 18 && isStudent);  // ?
// console.log(age < 18 || isStudent);  // ?
// console.log(!isStudent);             // ?

// let age = 17;
// if(age>18){
//     console.log("You are Eligible to vote");
// }else{
//     console.log("You are Not Eligible to vote");
// }

// let day = "Wednesday";

// switch(day){
//     case "Monday":
//         console.log("Its Monday");
//         break;
//     case "Wednesday":
//         console.log("It is Wednesday");
//         break;
//     case "Friday":
//         console.log("Its Friday");
//         break;
//     default:
//         console.log("Nothing to say");
//         break;
// }
// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let j=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);

// for(let i=1;i<=5;i++){
//     if(i==3){
//         continue;
//     }
//     console.log(i);
// }

// let i = 2;
// while (i <= 20) {
//   console.log(i);
//   i += 2;
// }

// let j=5
// do{
//     console.log(j);
//     j--;
// }while(j>=1);

// Ternary Operator
let uAge = 18;
let result = uAge>=18 ? "Major" : "Minor";
console.log(result);

// For..of Loop
let names = ["Jagan","Nallaiyan","Kabiles"]
for(let name of names){
  console.log("Hello" + name);
}
