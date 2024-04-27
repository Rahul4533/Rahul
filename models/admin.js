import mongoose from 'mongoose';


const adminSchema= mongoose.Schema({
    name:{
        type:String
    },
    user:{
        type:Array,
        default:[],

    },
    
})

const AdminModel=mongoose.model('Admin',adminSchema);

export  default AdminModel;