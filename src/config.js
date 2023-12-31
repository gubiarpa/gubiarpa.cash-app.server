import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI =
	process.env.MONGODB_URI || "mongodb://localhost/cash-app";
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "S3CR3T";
