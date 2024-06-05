import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Profile from "@/lib/models/profile.model";

export async function GET(request: Request) {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const instrument = searchParams.get("instrument");
  const location = searchParams.get("location");
  const level = searchParams.get("level");

  let filter: any = {};

  if (instrument) filter.instrument = instrument;
  if (location) filter.location = location;
  if (level) filter.level = level;

  try {
    const profiles = await Profile.find(filter);
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
