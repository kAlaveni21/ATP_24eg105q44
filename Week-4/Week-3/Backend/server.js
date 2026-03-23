//create http server
//experess module exported default
//express internally contains http server
import exp from  'express'
const app=exp()
import {userApp} from "./APIs/UserAPI.js"
import {productApp} from "./APIs/productAPI.js"
//use body parser middlewear
app.use(exp.json())//this is a middle wear which can pass ,it can convert the javascript(which is in built)
//create custom middleware
function middleware1(req,res,next){
    res.json({message:"this res from middleware1"})
    console.log("middleware1 executed")
    next()
}
function middleware2(req,res,next){
    //res.json({message:"this res from middleware1"})
    console.log("middleware2 executed")
    next()
}
//forward req to useeapi if path
//use middleware1
app.use(middleware1)
app.use(middleware2)
app.use('/user-api',userApp)
app.use('/product-api',productApp)

//set a port number
const port=3000
app.listen(port,()=>console.log(`server listening po port ${port}...`))//used to assign port number to http server
//by this three lines we can create own server
//http is a software
//which installed in other is web server

//test data(replace this test data with db)

