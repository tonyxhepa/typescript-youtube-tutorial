let array = ["Tony", 35, true];
array = [12, true, "Tony", "Steve", "John"];
let tuple: [number, string, boolean] = [12, "Tony", true];
// we can add more elements to the array, but we can't add to tuple
// tuple = [12, "Tony", true, 12, "Tony", true];
// the order of the elements in the tuple is important
// tuple = ["Tony", 35, true];
tuple.push("Steve");
console.log("tuple", tuple);
let tuple2: readonly [number, string, boolean] = [12, "Tony", true];
//tuple2.push("Steve");

let tuple3: [name: string, age: number] = ["Tony", 35];

function printMessage(name: string, age: number) {
  console.log(`Hello, ${name}, you are ${age} years old!`);
}
printMessage("Tony", 35);
printMessage(tuple3[0], tuple3[1]);

const [myNameTest, myAgeTest] = tuple3;
printMessage(myNameTest, myAgeTest);
