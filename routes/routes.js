import express from "express";
import { AddDataServices } from "../services/AddDataServices.js";
import { EditDataServices } from "../services/EditDataServices.js";
import { GetDataServices } from "../services/GetDataServices.js";
export const router = express.Router();

router.post("/add", AddDataServices);
router.get("/get", GetDataServices);
router.put("/edit", EditDataServices);