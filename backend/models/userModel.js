import mongoose from "mongoose";

const UserScehma = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    bio: { type: String, default: "" },
    skills: { type: [String], default: [] },
    github: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    portfolio: { type: String, default: "" },
    hackathons: [
      {
        name: { type: String, required: true },
        role: { type: String, required: true },
        year: { type: Number, required: true },
      },
    ],
    // teams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Team" }],
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true }
);
const userModel = mongoose.models.user || mongoose.model('user',UserScehma);
export default userModel;
