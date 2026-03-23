//find the smallest element in the marks array
marks=[21,7,9,34,1]
let smallest=marks[0];
for(let j=0;j<marks.length;j++){
    if(marks[j]<smallest){
        smallest=marks[j];
    }
}
console.log("The smallest element in marks array is",smallest);