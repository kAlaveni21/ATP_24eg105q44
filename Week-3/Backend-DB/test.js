//fetch("https://jsonplaceholder.typicode.com/posts")
//.then(res=>console.log(res))
//.then(data=>console.log(data))
//.catch(err=>console.log(err))
//console.log("hello")
async function test(){
    try{
        let res=await fetch("https://jsonplaceholder.typicode.com/posts")
        let data=await res.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}
test()