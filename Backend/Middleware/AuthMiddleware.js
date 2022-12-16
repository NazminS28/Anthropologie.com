// Please use comments to describe the code so everyone can get it

import jwt from "jsonwebtoken";
import AsyncHandler from "express-async-handler";
import User from "../Modules/UserModule.js";

const protect = AsyncHandler(async (req,res,next)=>{
    let token;
    if(req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer"))
        {
            // console.log("token Found")
            try{
                token= req.headers.authorization.split(" ")[1];
                const decoded = jwt.verify(token,process.env.JWT_SECRET);
                // console.log(decoded);
                req.user=await User.findById(decoded.id).select("-password");
                next();
            }catch(error){
                console.log(error);
                res.status(401)
                throw new Error("Not authorized, token Failed  ")
            }
        }

        if(!token) {
            res.status(401);
            throw new Error("Not authorized, no token")
        }
    }
)

export default protect;