import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true, minlength: 2, maxlength: 80 },
    email: { type: String, trim: true, lowercase: true, required: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["student", "teacher"], required: true },

    // Optional fields for future
    section: { type: String, trim: true },
  },
  { timestamps: true }
);

userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ role: 1, section: 1 });

const User = mongoose.model("User", userSchema);
export default User;

