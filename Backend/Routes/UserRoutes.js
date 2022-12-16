// Please use comments to describe the code so everyone can get it
import express from "express";
import asyncHandler from "express-async-handler";
import User from "../Modules/UserModule.js";
import generateToken from "../utils/generateToken.js";

const userRoute = express.Router()

//LOGIN
userRoute.post("/login",asyncHandler(async (req,res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
  
    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        createdAt: user.createdAt,
       
        })
    }else{
        res.status(401)
        throw new Error("Invalid Email or Password")
    }  
}));


//REGISTER
userRoute.post("/",asyncHandler(async (req,res)=>{
    const {name,email, password} = req.body;

    const userExists = await User.findOne({email});
    
    if(userExists){
        res.status(404)
        throw new Error("User alredy exists ")
    }
    const user = await User.create({
        name,email,password,  

    });

    if(user){
        res.status(201).json({
            _id:user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
       
        })

    } else{
        res.status(400)
        throw new Error("Invalid ")
    }

}));

export default userRoute;