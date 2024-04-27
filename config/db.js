
import mongoose from "mongoose";

const connectDB=async()=>{

    try {

        await mongoose.connect('mongodb+srv://Rahul4533:4533rahul@rahul.pfskwld.mongodb.net/rahul');
        console.log(`MONGODB connected Successfully`)
        
    } catch (error) {

        console.log(`Mongodb not Connected `);
        
    }
}

export default connectDB;