//write a function that receives an array & search element as args and return the index of that searchelement in the array.it should return "not found" when search element not found
function search(arr,key){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===key){
            return i;
            
        }
    }
       return "not found";
}
let arr=[12,56,90,87,15];
let key=25;
console.log(search(arr,key));