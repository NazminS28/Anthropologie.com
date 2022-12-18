const mongoose=require("mongoose")

const TodoSchema=mongoose.Schema({
    name:String,
    image:String,
    title:String,
    price:Number,
    quantity:Number,
    userId:String
})

const TodoModel=mongoose.model("todo",TodoSchema)


module.exports={TodoModel}