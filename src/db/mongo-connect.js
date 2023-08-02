import mongoose from "mongoose";

export default async function connectMongoDB() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("db connected");
    } else {
      console.log("db already connected");
    }
  } catch (error) {
    console.log("db connection failed");
    console.error(error);
  }
}
