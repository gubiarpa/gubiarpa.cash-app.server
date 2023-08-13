import Category from "../models/category.model.js";

export const getAll = async (req, res) => {
	try {
		const categories = await Category.find();

		if (!categories)
			return res.status(400).json({ message: "Category not found" });

		return res.json(categories);
	} catch (err) {
		return res.status(500).json({ message: error.message });
	}
};
