import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectMongoDB from "./config/db.js";
import {
  getdatabase,
  getMember,
  createMember,
  updateMember,
  deleteMember,
} from "./controllers/client.controller.js";

import { clientExist } from "./middlewares/error.js";

const app = express();
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectMongoDB();

// Middilewares
app.use(express.json());
// Routes

app.get("/api/database", getdatabase);

app.get("/api/database/:id", clientExist, getMember);

app.post("/api/database", createMember);

app.put("/api/database/:id", clientExist, updateMember);

app.delete("/api/database/:id", clientExist, deleteMember);

// Starting server
app.listen(PORT, () => console.log("Server is up and running"));
