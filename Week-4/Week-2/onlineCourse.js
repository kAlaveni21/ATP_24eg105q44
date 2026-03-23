/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
*/
const courses = ["javascript", "react", "node", "mongodb", "express"];
let length5=courses.filter(element=>element.length>5)
console.log(length5)
let upper=courses.map(element=>element.toUpperCase())
console.log(upper)
let single=courses.reduce((accu,element)=>`${accu} | ${element}`)
console.log(`"${single}"`)
let find=courses.find(element=>element=="react")
console.log(find)
let findindex=courses.findIndex(element=>element=="node")
console.log(findindex)