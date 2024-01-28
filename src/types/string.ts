let firstName: string = "John";

// what we can do with a string type
let fullName: string = firstName + " " + "Doe";

console.log(fullName.toUpperCase());

fullName = firstName + " " + "Swift";
console.log(fullName.toUpperCase());

// what we cannot do with a string type
fullName.toExponential();

Math.log(fullName);

fullName = 412;
