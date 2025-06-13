const constring = 'mongodb+srv://starscream:starscream@taskman.zzka7hg.mongodb.net/?retryWrites=true&w=majority&appName=taskman'//connect string that mongodb gave me with my actual password filled in 
import mongoose from "mongoose"
export const connectDB = (url)=>{
    return mongoose.connect(constring)
}
