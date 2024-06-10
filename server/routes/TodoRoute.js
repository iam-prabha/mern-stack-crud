import { Router } from "express";
import { addInput, deleteByIdInput, getInput, getInputById, updateInput } from "../handlers/todoController.js";

const router = Router()
router.post("/add",addInput)

router.get("/getall",getInput);
router.get("/update/:id",getInputById)
router.delete("/delete/:id",deleteByIdInput)
router.put("/updated/:id",updateInput)
export default router