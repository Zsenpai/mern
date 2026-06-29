import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database online");
  } catch (error) {
    console.log("database offline", error);
  }
};
