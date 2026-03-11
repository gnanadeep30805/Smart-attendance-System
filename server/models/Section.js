import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    center: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
    radiusMeters: { type: Number, required: true, default: 50 },
  },
  { timestamps: true }
);

sectionSchema.index({ name: 1 }, { unique: true });

const Section = mongoose.model("Section", sectionSchema);
export default Section;

