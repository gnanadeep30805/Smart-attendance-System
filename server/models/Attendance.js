import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    section: { type: String, trim: true, index: true },
    markedAt: { type: Date, default: Date.now, index: true },
    location: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
    status: { type: String, enum: ["present", "rejected"], default: "present" },
    reason: { type: String, trim: true },
  },
  { timestamps: true }
);

attendanceSchema.index({ studentId: 1, markedAt: -1 });
attendanceSchema.index({ section: 1, markedAt: -1 });

const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;

