let arrayValue = ["red","orange","green"];
let [a,b,c] = arrayValue;
console.log(a);
console.log(b);
console.log(c);

let[first,,third] = arrayValue;
console.log(first);

// object Destructing
let objectValue = {
    fName : "Jagan",
    uAge : 21,
    fColor : "RED"
};

let {fName,uAge} = objectValue;
console.log(uAge);

let{fColor:goodColor} = objectValue;
console.log(goodColor);