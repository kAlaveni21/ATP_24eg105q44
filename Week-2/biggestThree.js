//write a function that recieves 3 number args and return the big number
function findBig(a,b,c)
{
    if(a>b && a>c){
        return a;
    }
    else if(b>c){
        return b;
    }
    else{
        return c;
    }
}
let big=findBig(30,67,89);
console.log("The big number is",big);