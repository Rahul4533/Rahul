import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import user from './routes/user.js'
import admin from './routes/admin.js'
dotenv.config();
const app=express();
  connectDB();

app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
 

app.use('/',user);
app.use('/admin',admin)
app.listen(7000,()=>{
    console.log("Server is running success fully");
})
