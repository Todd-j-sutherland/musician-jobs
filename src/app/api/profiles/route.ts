import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Profile from "@/lib/models/profile.model";

export async function GET() {
  await connectDB();

  try {
    const profiles = await Profile.find({});
    return NextResponse.json({ success: true, data: profiles });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  await connectDB();
  const data = await request.json();

  try {
    const profile = new Profile(data);
    await profile.save();
    return NextResponse.json({ success: true, data: profile });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
