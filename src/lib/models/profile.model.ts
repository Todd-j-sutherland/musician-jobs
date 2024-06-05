import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      // required: true,
      unique: true,
    },
    name: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
    },
    instrument: {
      type: String,
      // required: true,
    },
    location: {
      type: String,
      // required: true,
    },
    level: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Profile ||
  mongoose.model("Profile", ProfileSchema);
