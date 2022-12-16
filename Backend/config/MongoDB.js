// Please use comments to describe the code so everyone
import mongoose from "mongoose";

// mongo connection
const connectDatabase = async ()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
        console.log("Mongo Connected Successfull...")
    }
    catch(error){
        console.log("failed DB connection")
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDatabase;