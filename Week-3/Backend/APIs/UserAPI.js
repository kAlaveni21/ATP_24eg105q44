//create mini-express app(separate route)
import exp from 'express'
export const userApp=exp.Router()


let users=[]

//create USER API(REST API -Representional state Transfer)


    //Route to handle GET req of client(http://localhost:3000/users)
    userApp.get('/users',(req,res)=>{
        //send res to client
        res.json({message:"all users",payload:users})
    })//empty browser can only get request
    //postman,restclient->for request(to test)
    //Route to handle POST req of client
    userApp.get('/users/:id',(req,res)=>{
        let idofurl=Number(req.params.id)
        let index=users.findIndex(userobj=>userobj.id==idofurl)
        if(index==-1)
        {
            return res.json({messsage:"user not found"})
        }
         res.json(users[index])
        //or
        //let index=users.find(userobj=>userobj.id==idofurl)
        //if(index==undefined)
        //return res.json({message:"user not found"})
        //return res.json({message:"a user",payload:index})

    })
    userApp.post('/users',(req,res)=>{
        //send res to client
        const newUser=req.body
        //push user into users
        users.push(newUser)
        res.json({message:"new user created"})
        
    })
    //Route to handle PUT req of client
    userApp.put('/users',(req,res)=>{
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
    userApp.delete('/users/:id',(req,res)=>{
        //get id of user from url parametrs
        //when the clent passing any data through url  it automaticall coverted into string
        let idofurl=Number(req.params.id) //{}return objects
        //find index of user
        let index=users.findIndex(userobj=>userobj.id==idofurl)
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