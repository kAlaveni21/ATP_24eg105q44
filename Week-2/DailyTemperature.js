/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28*/
    const temperatures = [32, 35, 28, 40, 38, 30, 42];
let temp35=temperatures.filter(element=>element>35)
console.log(temp35)
let temp=temperatures.map(element=>(element*9/5)+32)
console.log(temp)
let sum=temperatures.reduce((acum,ele)=>acum+ele)
let avg=sum/temperatures.length
console.log(avg)
let find40=temperatures.find(element=>element>40)
console.log(find40)
let findindex=temperatures.findIndex(element=>element==28)
console.log(findindex)
