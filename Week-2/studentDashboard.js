/*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"*/
   const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
let pass=students.filter(stdObj=>stdObj.marks>=40)
console.log(pass)
let grade=students.map(stdObj=>stdObj.marks>=90?{...stdObj,grade:"A"}:stdObj.marks>=75?{...stdObj,grade:"B"}:stdObj.marks>=60?{...stdObj,grade:"C"}:{...stdObj,grade:"D"})
console.log(grade)
let sum=students.reduce((acc,stu)=>acc+stu.marks,0)
let avg=sum/students.length
console.log("average marks of students is",avg)
let score=students.find(stu=>stu.marks===92)
console.log(score)
let index1=students.findIndex(stu=>stu.name=="Kiran")
console.log(index1)