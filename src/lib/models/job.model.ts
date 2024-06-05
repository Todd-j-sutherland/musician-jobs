// lib/models/job.model.ts
import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    instrument: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
    },
    salaryRange: {
      type: String,
    },
    employmentType: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Freelance"],
    },
    applicationDeadline: {
      type: Date,
    },
    contactEmail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Job || mongoose.model("Job", JobSchema);
