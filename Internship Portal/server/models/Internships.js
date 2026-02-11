import mongoose from "mongoose";

const InternshipSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    userId: { type: String, required: true, index: true },
  },
  { timestamps: true }
);

export default mongoose.model("Internship", InternshipSchema);
