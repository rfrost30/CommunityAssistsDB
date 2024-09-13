//routes for facility information. Functions are in the controllers

import express from "express";
import { addFacility } from "../controllers/facilities.js";

const router = express.Router()

router.get("/test", addFacility)

export default router

