import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const InternshipSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  description: String,
  userId: String,
}, { timestamps: true });

const Internship = mongoose.model("Internship", InternshipSchema);

app.get("/api/internships", async (req, res) => {
  const data = await Internship.find();
  res.json(data);
});

app.post("/api/internships", async (req, res) => {
  const data = await Internship.create(req.body);
  res.json(data);
});

app.put("/api/internships/:id", async (req, res) => {
  const data = await Internship.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(data);
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
