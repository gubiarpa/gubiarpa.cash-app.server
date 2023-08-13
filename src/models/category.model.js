import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
	{
		description: {
			type: String,
			required: true,
			trim: true
		}
	},
	{
		timestamps: true
	}
);

export default mongoose.model("Category", categorySchema);
