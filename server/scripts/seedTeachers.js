import dotenv from "dotenv";
import bcrypt from "bcryptjs";

import connectDb from "../config/db.js";
import User from "../models/User.js";

dotenv.config();

const emails = (process.env.TEACHER_EMAIL_ALLOWLIST ?? "")
  .split(",")
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

if (!emails.length) {
  // eslint-disable-next-line no-console
  console.error("No TEACHER_EMAIL_ALLOWLIST provided. Nothing to seed.");
  process.exit(1);
}

const defaultPassword = process.env.TEACHER_DEFAULT_PASSWORD ?? "ChangeMe123!";

await connectDb();

for (const email of emails) {
  const existing = await User.findOne({ email });
  const passwordHash = await bcrypt.hash(defaultPassword, 10);

  if (existing) {
    existing.role = "teacher";
    existing.passwordHash = passwordHash;
    existing.name = existing.name || "Teacher";
    await existing.save();
  } else {
    await User.create({
      name: "Teacher",
      email,
      passwordHash,
      role: "teacher",
    });
  }
}

// eslint-disable-next-line no-console
console.log(`Seeded/updated ${emails.length} teacher account(s). Default password: ${defaultPassword}`);
process.exit(0);

