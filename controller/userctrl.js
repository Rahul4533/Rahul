import UserModel from "../models/user.js"

export  const registeruser=async(req,res)=>{

    try {
       
        const data=await UserModel.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        });
        
         res.status(200).json({message:"User Register success fully"});
        


        
    } catch (error) {

        res.status(500).json(error);
        
    }

}


export const login=async(req,res)=>{

    try {

        const user=await UserModel.findOne({email:req.body.email});
        if(!user){

            return res.status(404).json({ error: 'User not found' });
         
        }

         if(user.status==='blocked' || user.status==='pending'){

           return  res.status(200).json({message:"User has been blocked || pending"})
         }

         const token=jwt.sign({id:user._id},process.env.sec);

         res.cookie("access_token",token,{
            httpOnly:true
           }).status(200).json({
            message:"Login succees",
            other
           })

        
    } catch (error) {
        res.status(500).json(error);
    }

}