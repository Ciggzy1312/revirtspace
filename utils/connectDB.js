import mongoose from "mongoose";

export default function connectDB(){
    mongoose.connect(process.env.MONGO_URI, async (err)=>{
        if(err){
            console.log(err);
        }
    });
}