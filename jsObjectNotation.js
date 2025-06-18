let person = {
    fName : "Jagan",
    uuAge : 21,
};

let jsonString =  JSON.stringify(person);
console.log(jsonString);

// COnvert json string into js object

let jsonData = '{"name":"kabilesh","uAge":20}';
let obj = JSON.parse(jsonData);
console.log(obj.name);
console.log(obj.uAge);