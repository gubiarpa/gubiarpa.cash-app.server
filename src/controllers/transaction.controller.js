import Transaction from "../models/transaction.model.js";

export const getAllTransactions = async (_, res) => {
	try {
		const transactions = await Transaction.find().populate("category");
		return res.json(transactions);
	} catch (err) {
		return res.status(500).json({ message: error.message });
	}
};

export const createTransaction = async (req, res) => {
	try {
		const { description, amount, due, category } = req.body;
		const createdTransaction = new Transaction({
			description,
			amount,
			due,
			category
		});
		await createdTransaction.save();
		res.status(201).json(createdTransaction);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const updateTransaction = async (req, res) => {
	try {
		const { description, amount, due, category } = req.body;
		console.log(description, amount, due, category);
		const updatedTrasaction = await Transaction.findOneAndUpdate(
			{ _id: req.params.id },
			{ description, amount, due, category },
			{ new: true }
		);
		return res.json(updatedTrasaction);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

export const deleteTransaction = async (req, res) => {
	try {
		const deletedTransaction = await Transaction.findByIdAndDelete(
			req.params.id
		);
		if (!deletedTransaction)
			return res.status(404).json({ message: "Transaction not found" });
		return res.sendStatus(204);
	} catch (err) {}
};
