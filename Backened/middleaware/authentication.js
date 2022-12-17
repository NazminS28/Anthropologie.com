

const jwt=require("jsonwebtoken")

const authentication=(req,res,next)=>{
    const token =req.headers?.authorization?.split(" ")[1]
    if(token){
        const decode=jwt.verify(token,"hush")
        if(decode){
            const userId=decode.userId
            req.body.userId=userId
            next()
        }
        else{
            res.send({"msg":"please login again"})
        }
    }
    else{
        res.send({"msg":"please login again"})
    }
}

module.exports={authentication}