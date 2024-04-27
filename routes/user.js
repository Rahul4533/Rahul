
import express from "express";
import { login, registeruser } from "../controller/userctrl.js";

const router=express.Router();


router.post('/user',registeruser);
router.post('/login',login);


export default router;
