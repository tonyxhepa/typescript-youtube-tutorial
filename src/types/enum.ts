enum Role {
  Teacher = "TEACHER",
  Student = "STUDENT",
}

type User = {
  name: string;
  age: number;
  address: string;
  role: Role;
};

const student: User = {
  name: "Tony",
  age: 23,
  address: "123 Main St.",
  role: Role.Student,
};

const teacher: User = {
  name: "Elon",
  age: 42,
  address: "123 Main St.",
  role: Role.Teacher,
};

console.log("student", student);
console.log("teacher", teacher);
