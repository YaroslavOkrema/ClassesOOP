// class -> function 
// ab class -> class -> object

let a = 'Ivan';
let b = '7778888absd';

const person = new User(a, b);
console.log(person.username);
console.log(person.validatePassword());

let firstStudent = new Student(a, b, 'P1M');
console.log(firstStudent);
console.log(firstStudent.getStudentCourses());
console.log(firstStudent.validatePassword());

