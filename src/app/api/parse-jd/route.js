import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  return NextResponse.json({
    success: true,
    jobDescription: body.jobDescription ?? "",
    parsed: {
      title: "Sample Job Title",
      company: "Sample Company",
      requiredSkills: ["javascript", "react"]
    }
  });
}
