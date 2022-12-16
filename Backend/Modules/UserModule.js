// Please use comments to describe the code so everyone can get it
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        require:true,
        default:false
    },

     
},
{
    timestamps:true
}
)

//LOGIN
UserSchema.methods.matchPassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword, this.password);
}

//REGISTER
UserSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})  

const User = mongoose.model("User", UserSchema)

export default User