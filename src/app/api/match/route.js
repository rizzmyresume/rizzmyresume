import { NextResponse } from "next/server";
import { calculateKeywordMatches } from "../../../lib/matcher";

export async function POST(req) {
  const { profileSkills = [], requiredSkills = [] } = await req.json();

  const matches = calculateKeywordMatches(profileSkills, requiredSkills);

  return NextResponse.json({
    success: true,
    matches,
    score: requiredSkills.length
      ? Math.round((matches.length / requiredSkills.length) * 100)
      : 0
  });
}
