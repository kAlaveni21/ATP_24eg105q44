/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92*/
    const marks = [78, 92, 35, 88, 40, 67];
    let pass=marks.filter(element=>element>=40)
    console.log(pass)
    let add=marks.map(element=>element+5)
    console.log(add)
    let highest=marks.reduce((acc,element)=>acc>element?acc:element)
    console.log(highest)
    let find=marks.find(element=>element<40)
    console.log(find)
    let findindex=marks.findIndex(element=>element==92)
    console.log(findindex)
