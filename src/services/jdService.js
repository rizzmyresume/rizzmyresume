export async function parseJobDescription(jobDescription) {
  const res = await fetch("/api/parse-jd", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jobDescription })
  });

  if (!res.ok) {
    throw new Error("Failed to parse job description");
  }

  return res.json();
}
