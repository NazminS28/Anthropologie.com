const mongoose=require("mongoose")

const TodoSchema=mongoose.Schema({
    taskname:String,
    status:String,
    tag:String,
    userId:String

})

const TodoModel=mongoose.model("todo",TodoSchema)


module.exports={TodoModel}