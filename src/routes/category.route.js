import { Router } from "express";
import {
	createCategory,
	deleteCategory,
	getAllCategories,
	getCategory,
	updateCategory
} from "../controllers/category.controller.js";

const router = Router();

router.get("/", getAllCategories);
router.get("/:id", getCategory);
router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
