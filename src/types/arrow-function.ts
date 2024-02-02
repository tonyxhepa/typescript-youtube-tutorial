let arrowFunction = () => {
  console.log("Hello World");
};
arrowFunction();
let arrowFunction2 = (a: number, b: number) => {
  return a + b;
};
console.log("arrowFunction2(1, 2): ", arrowFunction2(1, 2));
let arrowFunction3 = (a: number, b: number) => a + b;
console.log("arrowFunction3(1, 2): ", arrowFunction3(1, 2));
