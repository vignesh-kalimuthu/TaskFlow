import express from "express";
import cors from "cors";
import "dotenv/config";
import userRouter from "./routes/userRoute.js";
import taskRouter from "./routes/taskRoute.js";
import { connectDB } from "./config/db.js";
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use(`/${process.env.APP_VERSION}/user`, userRouter);
app.use(`/${process.env.APP_VERSION}/task`, taskRouter);

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
