let x = Number.MAX_SAFE_INTEGER;
let y = Number.MIN_SAFE_INTEGER;

let xPlusOne = x + 1;
let xPlusTwo = x + 2;

console.log("x = ", x);
console.log("y = ", y);
console.log("x + 1 = ", xPlusOne);
console.log("x + 2 = ", xPlusTwo);
console.log("x + 1 === x + 2 = ", xPlusOne === xPlusTwo);

let bigIntOne = BigInt(1);
let bigIntTwo = 12365984n;

console.log("bigIntOne = ", bigIntOne);
console.log("bigIntTwo = ", bigIntTwo);

// what we can do with BigInt
let myBigIntOne: bigint = BigInt(15465456);
let myBigIntTwo: bigint = 326597978n;
let myBigIntThree: bigint = myBigIntOne + myBigIntTwo;

console.log("myBigIntOne = ", myBigIntOne);
console.log("myBigIntTwo = ", myBigIntTwo);

console.log(myBigIntThree);

// what we cannot do with BigInt

let myDecimal: bigint = 123.456789n;

let myMath: bigint = Math.log(10);