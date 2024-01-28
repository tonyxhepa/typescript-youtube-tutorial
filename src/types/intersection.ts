interface Student {
  studentId: number;
  studentName: string;
}
interface Teacher {
  teacherId: number;
  teacherName: string;
}
type intersectionType = Student & Teacher;

let classroom: intersectionType = {
  studentId: 1,
  studentName: "Tony Student",
  teacherId: 1,
  teacherName: "Elon Musk",
};

console.log("classroom student", classroom.studentName);
console.log("classroom teacher", classroom.teacherName);

interface Partner {
  credit: number;
  name: string;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  phone: string;
  email: string;
  address: string;
}

type Employee = Identity & Contact;
type Customer = Partner & Contact;

let employee: Employee = {
  id: 1,
  name: "Employee One",
  phone: "123456789",
  email: "<EMAIL>",
  address: "123 Main St.",
};

let cutomer: Customer = {
  credit: 100,
  name: "Customer One",
  phone: "123456789",
  email: "<EMAIL>",
  address: "123 Main St.",
};
