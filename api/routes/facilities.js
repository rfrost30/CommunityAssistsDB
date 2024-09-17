//routes for facility information. Functions are in the controllers

import express from "express";
import {
  addFacility,
  deleteFacility,
  getAllFacilities,
  getFacility,
  updateFacility,
} from "../controllers/facilities.js";

const router = express.Router();

router.get("/", getAllFacilities);
router.get("/:id", getFacility);
router.post("/", addFacility);
router.delete("/:id", deleteFacility);
router.put("/:id", updateFacility);

export default router;
