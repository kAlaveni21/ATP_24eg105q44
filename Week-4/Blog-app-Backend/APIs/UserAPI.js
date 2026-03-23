import exp from 'express'
import { ArticleModel } from '../models/ArticleModel.js'
import { verifyToken } from '../middlewares/VerifyToken.js'
export const userApp=exp.Router()
userApp.get('/articles',verifyToken("USER"),async(req,res)=>{
    //read articles
    const articleList=await ArticleModel.find({isArticleActive:true})
    //res
    res.status(200).json({message:"articles",payload:articleList})
})


//add comments to an article
userApp.put("/articles",verifyToken("USER"),async(req,res)=>{
    //get body from req
    const {articleId,comment}=req.body
    //check article
    const articleDocument=await ArticleModel.findOne({_id:articleId,isArticleActive:true})
    //if article not found
    if(!articleDocument){
        return res.status(404).json({message:"article not found"})
    }
    //get user id
    const userId=req.user?.id
    //add comments to comment arry of articledocument
    articleDocument.comments.push({user:userId,comment:comment})
    //save
    await articleDocument.save()
    //send res
    res.status(200).json({message:"commet added successfully",payload:articleDocument})
})