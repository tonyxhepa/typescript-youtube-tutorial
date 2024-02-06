// function retAnyArray(items: any[]): any[] {
//   return new Array().concat(items);
// }
// let numArray = retAnyArray([1, 2, 3, 4, 5]);
// let strArray = retAnyArray(["a", "b", "c", "d", "e"]);
// numArray.push(6);
// strArray.push("f");
// numArray.push("g");

// console.log("numArray: ", numArray);
// console.log("strArray: ", strArray);

function retAnyArray<Items>(items: Items[]): Items[] {
  return new Array<Items>().concat(items);
}

let numArray = retAnyArray([1, 2, 3, 4, 5]);
let strArray = retAnyArray(["a", "b", "c", "d", "e"]);
numArray.push(6);
strArray.push("f");
console.log("numArray: ", numArray);
console.log("strArray: ", strArray);

function identity<T, U>(one: T, two: U): void {
  console.log("one: " + typeof one + " two: " + typeof two);
}
let myIdentity = identity<string, number>("a", 1);
let myIdentity2 = identity<string, string>("a", "b");
