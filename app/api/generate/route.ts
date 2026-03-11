import { NextRequest, NextResponse } from "next/server";

// TODO: wire up Prisma + Gemini in a later iteration.

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  // In the future, this will:
  // 1. Look up the requesting user's Identity Vault (education, experience, skills, transcripts)
  // 2. Call the Gemini API with both vault + job description
  // 3. Return structured CV sections ready to render into the PDF preview.

  const jobDescription: string | undefined = body?.jobDescription;

  return NextResponse.json(
    {
      status: "ok",
      message: "Placeholder matcher response – Gemini integration not wired yet.",
      jobDescriptionPreview: jobDescription?.slice(0, 280) ?? null,
    },
    { status: 200 }
  );
}

