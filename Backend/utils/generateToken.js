// Please use comments to describe the code so everyone can get it

import jwt from "jsonwebtoken"

const generateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: "30d",
    });
};

export default generateToken;