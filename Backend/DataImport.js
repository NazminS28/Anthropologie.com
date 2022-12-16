import express from "express";
import users from "./data/users.js";
import User from "./Modules/UserModule.js";
import asyncHandler from "express-async-handler"

const ImportData = express.Router()

ImportData.post("/user", asyncHandler(
    async(req,res)=>{
        await User.remove({})
        const importuser= await User.insertMany(users)
        res.send({importuser})
    }
));





export default ImportData;