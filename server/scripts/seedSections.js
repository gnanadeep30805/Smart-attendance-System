import dotenv from "dotenv";

import connectDb from "../config/db.js";
import Section from "../models/Section.js";

dotenv.config();

await connectDb();

// Add/adjust these to match your campus.
const sections = [
  {
    name: "Section-A",
    center: { latitude: 0, longitude: 0 },
    radiusMeters: 80,
  },
];

for (const s of sections) {
  await Section.updateOne({ name: s.name }, { $set: s }, { upsert: true });
}

// eslint-disable-next-line no-console
console.log(`Seeded/updated ${sections.length} section(s).`);
process.exit(0);

