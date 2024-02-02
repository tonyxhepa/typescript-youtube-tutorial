function wellcome() {
  console.log("Hello World");
}
wellcome();

let wellcome2 = function () {
  console.log("Hello World 2");
};
wellcome2();

function sumOne(a: number, b: number) {
  return a + b;
}
console.log("sumOne(1, 2): ", sumOne(1, 2));
let sumTwo = function (a: number, b: number) {
  return a + b;
};
console.log("sumTwo(1, 2): ", sumTwo(1, 2));

function userFunction(name: string, age: number, country?: string) {
  if (country) {
    return `My name is ${name}, I'm ${age} years old and I live in ${country}`;
  }
  return `My name is ${name}, I'm ${age} years old`;
}

console.log("userFunction: ", userFunction("John", 25, "USA"));

function userFunction2(name: string, age: number, country: string = "USA") {
  return `My name is ${name}, I'm ${age} years old and I live in ${country}`;
}

console.log("userFunction2: ", userFunction2("John", 25, "UK"));
