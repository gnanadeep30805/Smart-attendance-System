import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

const router = Router();

function signToken(user) {
  return jwt.sign(
    { sub: user._id.toString(), role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN ?? "7d" }
  );
}

router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body ?? {};

  // Student-only self registration
  if (role && role !== "student") {
    return res.status(403).json({ message: "Teacher accounts are not self-registered." });
  }

  if (!name || !email || !password) {
    return res.status(400).json({ message: "name, email and password are required." });
  }

  const existing = await User.findOne({ email: String(email).toLowerCase().trim() }).select("_id");
  if (existing) return res.status(409).json({ message: "Email already registered." });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    passwordHash,
    role: "student",
  });

  res.status(201).json({
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
  });
});

router.post("/login", async (req, res) => {
  const { email, password, role } = req.body ?? {};

  if (!email || !password) return res.status(400).json({ message: "email and password are required." });

  const normalizedEmail = String(email).toLowerCase().trim();
  const user = await User.findOne({ email: normalizedEmail });
  if (!user) return res.status(401).json({ message: "Invalid credentials." });

  if (role && user.role !== role) return res.status(403).json({ message: "Role not allowed for this account." });

  if (user.role === "teacher") {
    const allowList = (process.env.TEACHER_EMAIL_ALLOWLIST ?? "")
      .split(",")
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean);
    if (allowList.length && !allowList.includes(user.email)) {
      return res.status(403).json({ message: "Teacher account is not enabled." });
    }
  }

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ message: "Invalid credentials." });

  const token = signToken(user);

  res.json({
    token,
    user: { id: user._id, name: user.name, email: user.email, role: user.role, section: user.section },
  });
});

export default router;

