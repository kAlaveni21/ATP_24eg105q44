//create user schema(username,password,email,age)
import {Schema,model} from "mongoose";
const userSchema=new Schema({
    //structure of user resource
    username:{
        type:String,
        required:[true,"user is required"],
        minLength:[4,"min length of username is 4 char"],
        maxLength:[7,"username size exceed 7 char"],
    },
    password:{
        type:String,
        required:[true,"password required"],
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already existed"],
    },
    age:{
       type:Number,
    },
},{
    versionKey:false,
    timestamps:true,
},)
//generate usermodel
export const UserModel=model("user",userSchema)