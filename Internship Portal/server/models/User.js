import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true, index: true },
    email: { type: String, trim: true, lowercase: true },
    name: { type: String, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
