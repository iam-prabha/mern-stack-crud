import { Router } from "express";
import { addInput, deleteByIdInput, getInput, updateInput } from "../handlers/todoController.js";

const router = Router()
router.post("/add",addInput)
router.get("/getall",getInput)
router.delete("/delete/:id",deleteByIdInput)
router.put("/update/:id",updateInput)
export default router