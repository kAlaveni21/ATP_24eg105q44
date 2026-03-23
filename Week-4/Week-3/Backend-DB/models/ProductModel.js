import { Schema,model } from "mongoose";
const productSchema=new Schema({
    productId:{
        type:Number,
        required:[true,"productId is required"],
    },
    productName:{
        type:String,
        required:[true,"productName is required"],
    },
    price:{
      type:Number,
      required:[true,"price is required"],
      min:[10000,"min price at least 10000"],
      max:[50000,"max price atmost 50000"],
    },
    brand:{
        type:String,
    },
},{
    versionKey:false,
    timestamps:true,
})
export const ProductModel=model("product",productSchema)
