type MyAge = number;
type MyName = string;
type myEmail = string;

type Person = {
  name: MyName;
  age: MyAge;
  email: myEmail;
};
const person: Person = {
  name: "John",
  age: 30,
  email: "<EMAIL>",
};
const myUser: Person = {
  name: "John",
  age: 30,
  email: "<EMAIL>",
};
// interfaces
interface PersonInterface {
  name: MyName;
  age: MyAge;
  email: myEmail;
}

interface AdminInterface extends PersonInterface {
  isAdmin: boolean;
}

const myAdmin: AdminInterface = {
  name: "John",
  age: 30,
  email: "<EMAIL>",
  isAdmin: true,
};

const myUser2: Person = {
  name: "John",
  age: 30,
  email: "<EMAIL>",
};
