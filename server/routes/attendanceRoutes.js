import { Router } from "express";
import auth from "../middleware/authMiddleware.js";
import requireRole from "../middleware/roleMiddleware.js";

import Attendance from "../models/Attendance.js";
import Section from "../models/Section.js";
import haversineDistanceMeters from "../utils/haversineDistance.js";

const router = Router();

// Student marks attendance (geofence optional if section exists)
router.post("/mark", auth, requireRole("student"), async (req, res) => {
  const { latitude, longitude, section } = req.body ?? {};
  if (typeof latitude !== "number" || typeof longitude !== "number") {
    return res.status(400).json({ message: "latitude and longitude are required numbers." });
  }

  let status = "present";
  let reason = "";
  let resolvedSection = section ?? req.user.section ?? "";

  if (resolvedSection) {
    const sec = await Section.findOne({ name: resolvedSection });
    if (sec) {
      const dist = haversineDistanceMeters(
        { latitude, longitude },
        { latitude: sec.center.latitude, longitude: sec.center.longitude }
      );
      if (dist > sec.radiusMeters) {
        status = "rejected";
        reason = "Outside allowed classroom radius.";
      }
    }
  }

  const record = await Attendance.create({
    studentId: req.user._id,
    section: resolvedSection || undefined,
    location: { latitude, longitude },
    status,
    reason: reason || undefined,
  });

  res.status(201).json({
    attendance: {
      id: record._id,
      markedAt: record.markedAt,
      section: record.section,
      status: record.status,
      reason: record.reason,
    },
  });
});

router.get("/history", auth, requireRole("student"), async (req, res) => {
  const records = await Attendance.find({ studentId: req.user._id })
    .sort({ markedAt: -1 })
    .limit(200)
    .lean();

  res.json({
    items: records.map((r) => ({
      id: r._id,
      markedAt: r.markedAt,
      section: r.section,
      status: r.status,
      reason: r.reason,
      location: r.location,
    })),
  });
});

export default router;

