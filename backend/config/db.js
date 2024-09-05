import mongoose from "mongoose";

export const connectDB = async () =>{ 
    await mongoose.connect('mongodb+srv://dhoangphuc003:cuckhikho.vn@cluster0.qaeojhi.mongodb.net/fish-del').then(()=>console.log("DB connect"));
}