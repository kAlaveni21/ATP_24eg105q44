import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { verifyToken } from '../middlewares/VerifyToken.js'
export const adminApp=exp.Router()
//read emails of user and author
adminApp.get("/user/author",verifyToken("ADMIN"),async(req,res)=>{
    //get email of user and author
const userEmail=await UserModel.find({role:{$in:["USER","AUTHOR"]}}).select("email role -_id")
//check user  and author email there are not
if(userEmail.length===0)
{
    return res.status(404).json({message:"email not found"})
}
res.status(200).json({mesaage:"emails",payload:userEmail})
})
// block or activate user or author 
adminApp.put("/user/block/:id", verifyToken("ADMIN"), async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByIdAndUpdate(
      userId,
      { isActive: false },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User blocked successfully",
      payload: user
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
adminApp.put("/user/activate/:id", verifyToken("ADMIN"), async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByIdAndUpdate(
      userId,
      { isActive: true },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User activated successfully",
      payload: user
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});