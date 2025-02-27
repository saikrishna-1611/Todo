import mongoose from "mongoose";
import taskModel from "./taskmodel";
const userSchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{
        type:String,required:true
    },
    password:{type:String,required:true},
    task:[{
        type:mongoose.Types.ObjectId,
        ref:taskModel,
        required:true
    }]
},{
    timestamps:true
})

const UserModel=new mongoose.model('UserModel',userSchema);
export default UserModel 