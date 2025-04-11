import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
const connectDB = async ()=>
{
    
    try{
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("DB Connected")
    }
    catch(error)
    {
        console.error("Not ",error);
    }
}

export default connectDB;