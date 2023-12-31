import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { auth } from "./middlewares/auth.middleware.js";
import authRoutes from "./routes/auth.route.js";
import categoryRoutes from "./routes/category.route.js";
import transactionRoutes from "./routes/transaction.route.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/category", auth, categoryRoutes);
app.use("/api/transaction", auth, transactionRoutes);

export default app;
