import { Router } from "express";
import auth from "../middleware/authMiddleware.js";
import requireRole from "../middleware/roleMiddleware.js";

import Section from "../models/Section.js";
import Attendance from "../models/Attendance.js";

const router = Router();

router.get("/sections", auth, requireRole("teacher"), async (_req, res) => {
  const sections = await Section.find().sort({ name: 1 }).lean();
  res.json({
    items: sections.map((s) => ({
      id: s._id,
      name: s.name,
      radiusMeters: s.radiusMeters,
      center: s.center,
    })),
  });
});

router.get("/attendance/:section", auth, requireRole("teacher"), async (req, res) => {
  const section = req.params.section;
  const records = await Attendance.find({ section }).sort({ markedAt: -1 }).limit(500).lean();
  res.json({
    section,
    items: records.map((r) => ({
      id: r._id,
      studentId: r.studentId,
      markedAt: r.markedAt,
      status: r.status,
      reason: r.reason,
      location: r.location,
    })),
  });
});

export default router;

