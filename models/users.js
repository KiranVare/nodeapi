import mongoose from "mongoose";

//Schema Creation
const schema = new mongoose.Schema(
    {
        name:String,
        email:String,
        password:String,
    }
)

//mongose model
export const User = mongoose.model("User",schema);
