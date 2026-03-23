import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { ArticleModel } from '../models/ArticleModel.js'
import { verifyToken } from '../middlewares/VerifyToken.js'
export const authorApp=exp.Router()
//write article(protected route)
authorApp.post("/article",verifyToken("AUTHOR"),async(req,res)=>{
    //get articleobj from client
    const articleObj=req.body
    let user=req.user
    //check author
    let author=await UserModel.findById(articleObj.author)
    if(author.email!=user.email){
        return res.status(403).json({message:"you are not authorized"})
    }
    if(!author){
        return res.status(404).json({message:"invalid article"})
    }
    //check role
    if(author.role!="AUTHOR"){
        return res.status(403).json({message:"only author can publish"})
    }

    //create article document
    const newArticle=new ArticleModel(articleObj)
    //save
    await newArticle.save()
    //res
    res.status(201).json({message:"Article is created"})

})
//read own article
authorApp.get("/article",verifyToken("AUTHOR"),async(req,res)=>{
    //get article by author email
    const authorIdOfToken=req.user?.id

    //get article by author id
    const articleList=await ArticleModel.find({author:authorIdOfToken})
    //send res
    res.status(200).json({message:"articles",payload:articleList})
})
authorApp.put("/article",verifyToken("AUTHOR"),async(req,res)=>{
    //get author id from decoded token
    const authorIdOfToken=req.user?.id
    //get article from client
    const {articleId,title,category,content}=req.body
    //check article id is exist
    const modifiedArticle=await ArticleModel.findByIdAndUpdate({_id:articleId,author:authorIdOfToken},{$set:{title,category,content}},{new:true})
    //if either article id or author not correct
    if(!modifiedArticle){
        return res.status(403).json({message:"Not authorized to edit article"})
    }
    //send res
     res.status(200).json({message:"Article modified",payload:modifiedArticle})
    
})
authorApp.patch("/articles",verifyToken("AUTHOR"),async(req,res)=>{
    //get author id from decoded token
    const authorIdOfToken=req.user?.id
    //get modified article from client
    const {articleId,isArticleActive}=req.body
    //get article by id
    const articleOfDB=await ArticleModel.findOne({_id:articleId,author:authorIdOfToken})
    //check status
    if(isArticleActive===articleOfDB.isArticleActive){
        return res.status(200).json({message:"Article already in the same state"})
    }

    articleOfDB.isArticleActive=isArticleActive
    await articleOfDB.save()
    //send res
    res.status(200).json({message:"Article modified",payload:articleOfDB})
})