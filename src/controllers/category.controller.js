import Category from "../models/category.model.js";

export const getAllCategories = async (_, res) => {
	try {
		const categories = await Category.find();
		return res.json(categories);
	} catch (err) {
		return res.status(500).json({ message: error.message });
	}
};

export const getCategory = async (req, res) => {
	try {
		const category = await Category.findById(req.params.id);
		if (!category)
			return res.status(404).json({ message: "Category not found" });
		return res.json(category);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const createCategory = async (req, res) => {
	try {
		const { description } = req.body;
		const createdCategory = new Category({
			description
		});
		await createdCategory.save();
		res.status(201).json(createdCategory);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const updateCategory = async (req, res) => {
	try {
		const { description } = req.body;
		const updatedCategory = await Category.findByIdAndUpdate(
			{ _id: req.params.id },
			{ description },
			{ new: true }
		);
		if (!updatedCategory)
			return res.status(404).json({ message: "Category not found" });
		return res.json(updatedCategory);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const deleteCategory = async (req, res) => {
	try {
		const deletedCategory = await Category.findByIdAndDelete(req.params.id);
		if (!deletedCategory)
			return res.status(404).json({ message: "Category not found" });
		return res.sendStatus(204);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};
