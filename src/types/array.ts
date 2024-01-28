let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let names: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
let names2: Array<string> = ["a", "b", "c", "d", "e", "f", "g"];

let names3 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 1, 2];
let names4 = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  1,
  2,
  false,
  true,
  { name: "a" },
];

let names5: (string | number)[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  1,
  2,
];
let names6: Array<string | number> = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
];
let names7: string[];
names7 = ["Tony", "Steve", "John"];
console.log(names7.pop()); // remove John and returns it
console.log("names7", names7);

/*
pop()	Removes the last element of the array and return that element
push()	Adds new elements to the array and returns the new array length
sort()	Sorts all the elements of the array
concat()	Joins two arrays and returns the combined result
indexOf()	Returns the index of the first match of a value in the array (-1 if not found)
copyWithin()	Copies a sequence of elements within the array
fill()	Fills the array with a static value from the provided start index to the end index
shift()	Removes and returns the first element of the array
splice()	Adds or removes elements from the array
unshift()	Adds one or more elements to the beginning of the array
includes()	Checks whether the array contains a certain element
join()	Joins all elements of the array into a string
lastIndexOf()	Returns the last index of an element in the array
slice()	Extracts a section of the array and returns the new array
toString()	Returns a string representation of the array
toLocaleString()	Returns a localized string representing the array
*/
