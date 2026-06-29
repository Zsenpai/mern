import dotenv from "dotenv";
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/ratelimiter.js";
import cors from "cors";
dotenv.config();
const app = express();
connectDB();
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);
app.listen(5001, () => {
  console.log("server started at port 5001");
});
