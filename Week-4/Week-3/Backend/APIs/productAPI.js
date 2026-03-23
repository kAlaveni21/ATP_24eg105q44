import exp from 'express'
export const productApp=exp.Router()




let users=[]

//create USER API(REST API -Representional state Transfer)


    //Route to handle GET req of client(http://localhost:3000/users)
    productApp.get('/users',(req,res)=>{
        //send res to client
        res.json({message:"all users",payload:users})
    })//empty browser can only get request
    //postman,restclient->for request(to test)
    //Route to handle POST req of client
    productApp.get('/users/:brand',(req,res)=>{
        let idofurl=req.params.brand
        let index=users.find(userobj=>userobj.brand==idofurl)
        if(index==undefined)
        {
            return res.json({messsage:"user not found"})
        }
         res.json({message:"a user",payload:index})
        //or
        //let index=users.find(userobj=>userobj.id==idofurl)
        //if(index==undefined)
        //return res.json({message:"user not found"})
        //return res.json({message:"a user",payload:index})

    })
    productApp.post('/users',(req,res)=>{
        //send res to client
        const newUser=req.body
        //push user into users
        users.push(newUser)
        res.json({message:"new user created"})
        
    })
    //Route to handle PUT req of client
    productApp.put('/users',(req,res)=>{
        //get modified user from client{}
        let modifieduser=req.body
        //get index of existing user in user array
        let index=users.findIndex(userobj=>userobj.id==modifieduser.id)
        //if user not found
        if(index==-1)
        {
            return res.json({message:"user not found"})
        }
        //update user with index
        users.splice(index,1,modifieduser)
        //send user
        res.json({message:"user updated"})
         })
    ///Route to handle DELETE req of client
    productApp.delete('/users/:id',(req,res)=>{
        //get id of user from url parametrs
        //when the clent passing any data through url  it automaticall coverted into string
        let idofurl=Number(req.params.id) //{}return objects
        //find index of user
        let index=users.findIndex(userobj=>userobj.Productid==idofurl)
        //if user not found
        if(index==-1)
        {
            return res.json({message:"user not found"})
        }
        //delete user by index
        users.splice(index,1)
        //send res
        res.json({messge:"user removed"})
    })
    
