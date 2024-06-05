// app/api/jobs/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Job from "@/lib/models/job.model";

export async function POST(req: Request) {
  await connectDB();

  try {
    const job = await req.json();
    const newJob = new Job(job);
    await newJob.save();
    return NextResponse.json({ success: true, data: newJob });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectDB();

  try {
    const jobs = await Job.find({});
    return NextResponse.json({ success: true, data: jobs });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
