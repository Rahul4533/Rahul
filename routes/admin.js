
import express from "express";
import { blockUser } from "../controller/adminctrl.js";
import {approveUser} from '../controller/adminctrl.js'

const router=express.Router();


router.put('/:id/block',blockUser);
router.put('/:id/approve',approveUser);


export default router;
