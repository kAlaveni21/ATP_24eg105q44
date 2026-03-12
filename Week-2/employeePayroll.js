/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"*/
    const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
let it=employees.filter(emp=>emp.department=="IT")
console.log(it)
let netsalary=employees.map(emp=>({...emp,net:emp.salary*0.1+emp.salary}))
console.log(netsalary)
let totalsalary=employees.reduce((acc,emp)=>acc+emp.salary,0)
console.log("total salary payout is",totalsalary)
let emp=employees.find(emp=>emp.salary===30000)
console.log(emp)
let index2=employees.findIndex(emp=>emp.name=="Neha")
console.log(index2)