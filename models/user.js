import mongoose from 'mongoose';


const userSchema= mongoose.Schema({
    name:{
        type:String,

    },
    email:{
        type:String,

    },
    password:{
        type:String
    },
    status:{
       type:String,
       default:"pending"
    },
    notification: {
        type: Array,
        default: [],
      },
})

const UserModel=mongoose.model('User',userSchema);

export  default UserModel;