import mongoose from "mongoose";

export default async function connectDb() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw Object.assign(new Error("MONGO_URI is not set"), { statusCode: 500 });
  }

  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(
      "Failed to connect to MongoDB. Set MONGO_URI (local MongoDB or MongoDB Atlas). Original error:",
      err?.message ?? err
    );
    process.exit(1);
  }
}

