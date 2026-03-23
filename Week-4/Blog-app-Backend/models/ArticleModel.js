import {Schema,model,Types} from 'mongoose'

//create comment schema
const commentSchema=new Schema({
    user:{
        type:Types.ObjectId,
        ref:"user",
        required:[true,"User Id required"],
    },
    comment:{
        type:String,
        required:[true,"comments are required"],
    },

})
const articleSchema=new Schema({
author:{
    type:Types.ObjectId,
    ref:"user",
    required:[true,"Author Id is required "]
},
title:{
    type:String,
    required:[true,"Title is required"],
},
category:{
    type:String,
    required:[true,"Category is required"]
},
content:{
   type:String,
    required:[true,"Content is required"] 
},
comments:[{type:commentSchema,default:[]}],
isArticleActive:{
    type:Boolean,
    default:true,
}
},{
    versionKey:false,
    timestamps:true,
    strict:"throw",

})
//create article model
export const ArticleModel=model("article",articleSchema)