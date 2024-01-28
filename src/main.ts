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
