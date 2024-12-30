import express from "express";
import { sendmail } from "../controllers/Usercontroller.js";

const router = express.Router();

router.post("/Sendmail",  sendmail);

export default router;
