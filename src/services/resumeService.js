export async function generateResume(payload) {
  const res = await fetch("/api/generate-resume", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error("Failed to generate resume");
  }

  return res.json();
}
