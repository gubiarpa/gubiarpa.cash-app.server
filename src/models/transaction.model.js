import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
	{
		description: {
			type: String,
			required: true,
			trim: true
		},
		amount: {
			type: Number,
			required: true
		},
		due: {
			type: Date,
			required: true
		},
		category: {
			type: mongoose.Types.ObjectId,
			ref: "Category"
		}
	},
	{
		timestamps: true
	}
);

export default mongoose.model("Transaction", transactionSchema);
