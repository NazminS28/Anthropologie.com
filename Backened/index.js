
const express=require("express")
const {UserModel}=require("./models/User.model")
const cors=require("cors")
const bcrypt=require("bcrypt")
const {connection} =require("./Config/db")
const jwt=require("jsonwebtoken")
const { authentication } = require("./middleaware/authentication")
const { todoRouter } = require("./route/todo.route")
require("dotenv").config()
const app=express()
app.use(express.json())

app.use(cors({
    origin:"*"
}))

app.post("/signup",async(req,res)=>{
    const {email,password}=req.body;
    const userPresent=await UserModel.findOne({email})
    if(userPresent?.email){
        res.send({"msg":"already exist"})
    }
else{
    try{
        bcrypt.hash(password,3,async function(err,hash){
            const user=new UserModel({email,password:hash})
            await user.save()
            res.send({"msg":"sign up successfull"})
        })
    }
    catch(err){
        console.log(err)
        res.send({"msg":"sign up failed"})

    }
}
})


app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await UserModel.find({email})
        if(user.length>0){
            const hash_password=user[0].password
            bcrypt.compare(password,hash_password,async function(err, result){
           if(result){
            const token=jwt.sign({"userId":user[0]._id}, "hush");
            res.send({"msg":"login Succesfull","token":token})
           }
           else{
            res.send({"msg":"Login Fail"})
           }

            })
        }
        else{
            res.send({"msg":"Login Fail"})
        }
    }
    catch(err){
        console.log(err)
        res.send({"msg":"Login Fail"})
    }
})


app.use(authentication)
app.use("/todo",todoRouter)

app.listen(process.env.PORT,async()=>{
    try{
        await connection;
console.log("db connected succesfull")
    }
    catch(err){
        console.log("db connectection fail")
        console.log(err)
    }

})