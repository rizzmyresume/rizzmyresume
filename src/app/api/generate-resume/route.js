import { NextResponse } from "next/server";
import { openai } from "../../../lib/openai";

export async function POST(req) {
  const { profile, jobDescription } = await req.json();

  // Minimal placeholder so route works even without a real key
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({
      success: true,
      resume: "Add your OPENAI_API_KEY in .env.local to enable AI resume generation."
    });
  }

  const prompt = `Generate a concise, ATS-friendly resume tailored to this job.\n\nProfile:\n${JSON.stringify(
    profile,
    null,
    2
  )}\n\nJob Description:\n${jobDescription}`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [{ role: "user", content: prompt }]
  });

  const resume = completion.choices?.[0]?.message?.content ?? "";

  return NextResponse.json({
    success: true,
    resume
  });
}
