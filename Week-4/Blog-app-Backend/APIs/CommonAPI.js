import exp from 'express';
import {UserModel} from '../models/UserModel.js'
import {hash,compare} from 'bcryptjs'
import {config} from 'dotenv'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/VerifyToken.js';
const {sign}=jwt
export const commonApp=exp.Router()
config()
//register
commonApp.post("/users",async(req,res)=>{
    let allowedRoles=["AUTHOR","USER"]
    //get user from req
    const newUser=req.body
    //CHECK THE ROLE
    if(!allowedRoles.includes(newUser.role)){
        return res.status(400).json({message:"Invalid role"})
    }
    //hash password and replace plain with hasged one
    newUser.password=await hash(newUser.password,12)
    //create new user document
    const newUserDoc=new UserModel(newUser)
    //save document 
    const result=await newUserDoc.save();
    //send res
    res.status(201).json({message:"User Created"})
})
commonApp.post("/login",async(req,res)=>{
    
    //get email and password
    const {email,password}=req.body
    let user =await UserModel.findOne({email:email})
    if(!user){
        return res.status(400).json({message:"Invalid User"})
    }
    let isMatched=await compare(password,user.password)
    if(!isMatched){
                return res.status(400).json({message:"Invalid password"})

    }
    //set token
    let signedToken=sign({id:user._id,email:email,role:user.role},process.env.SECRET_KEY,{expiresIn:"1h"})

    res.cookie("token",signedToken,{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })
    //remove password 
    let userObj=user.toObject()
    delete  userObj.password
    //res
        res.status(200).json({message:"user login successfully",payload:userObj})



})
commonApp.get("/logout",(req,res)=>{
    //delete token from cookie storage
    res.clearCookie("token",{
        httpOnly:true,
        secure:false,
        sameSite:"lax",
    })
    //send res
    res.status(200).json({message:"logout success"})
})


//change password
commonApp.put("/password",verifyToken("USER","AUTHOR","ADMIN"),async(req,res)=>{
    //get current and new password from user
    const {currentPassword,newPassword}=req.body
    //check current password and new password are same
    if(currentPassword===newPassword){
        return res.status(400).json({message:"the password is same please chenge"})
    }
    //get current password of user/admin/author
    const userPassword=await UserModel.findById(req.user.id)
    //check the curent password of req and user are not same
    let isMatched=await compare(currentPassword,userPassword.password)
    if(!isMatched){
        return res.status(400).json({message:"the current password is invalid please enter current pass"})
    }


    //hash new password
    const newUserPassword=await hash(newPassword,12)
    //replace current password of user with hashed new password
    await UserModel.updateOne({ _id: req.user.id },
        { $set: { password: newUserPassword }})
    /*//save
    const user = await UserModel.findById(req.user._id)
    user.password = newUserPassword
      await user.save()*/
    //sand res
    res.status(200).json({message:"password changed successfully"})
})