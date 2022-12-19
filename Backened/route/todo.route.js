
const express=require("express")
const todoRouter=express.Router()

const {TodoModel}=require("../models/Todo.model")


todoRouter.get("/",async(req,res)=>{
    
    try{
     const notes=await TodoModel.find()
     res.send(notes)
    }
    catch(err){
  res.send({"msg":"something Went wrong"})
    }
})


todoRouter.post("/add",async(req,res)=>{
    const payload=req.body
    try{
        const new_todo=new TodoModel(payload)
        new_todo.save()
        res.send({"msg":"todo is added"})
    }
    catch(err){
        console.log(err)
        res.send({"msg":"something went wrong"})
    }
})

todoRouter.delete("/delete/:todoId",async(req,res)=>{
    const todoId=req.params.todoId;
    const userId=req.body.userId
    const todo=await TodoModel.findOne({_id:todoId})
    if(userId!==todo.userId){
        res.send({"msg":"Not Authorised"})
    }
    else{
    try{
        await TodoModel.findByIdAndDelete({_id:todoId})
        res.send({"msg":"todo is deleted"})
    }
    catch(err){
        console.log(err)
        res.send({"msg":"something went wrong"})
    }
    }
})
todoRouter.patch("/update/:todoId",async(req,res)=>{
    const todoId=req.params.todoId;
    const userId=req.body.userId
    const payload=req.body
    const todo=await TodoModel.findOne({_id:todoId})
    if(userId!==todo.userId){
        res.send({"msg":"Not Authorised"})
    }
    else{
    try{
        await TodoModel.findByIdAndUpdate({_id:todoId},payload)
        res.send({"msg":"todo is updated"})
    }
    catch(err){
        console.log(err)
        res.send({"msg":"something went wrong"})
    }
    }
})

module.exports={todoRouter}