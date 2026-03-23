//write a function that receives an array as arg and return their sum
function arraySum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
let arr=[10,5,20,15];
let result=arraySum(arr);
console.log("The sum of the array is",result);