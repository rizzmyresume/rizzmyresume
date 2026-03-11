"use client";

import { useState } from "react";

export default function ResumePage() {
  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState("");
  const [loading, setLoading] = useState(false);

  const generateResume = async () => {
    setLoading(true);

    const response = await fetch("/api/generate-resume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jobDescription }),
    });

    const data = await response.json();
    setResume(data.resume);

    setLoading(false);
  };

  return (
    <main style={{ padding: "60px", maxWidth: "900px", margin: "auto" }}>
      <h1>AI Resume Generator</h1>

      <textarea
        placeholder="Paste the job description here..."
        rows={10}
        style={{ width: "100%", marginTop: "20px", padding: "10px" }}
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />

      <button
        style={{ marginTop: "20px", padding: "10px 20px" }}
        onClick={generateResume}
      >
        {loading ? "Generating..." : "Generate Resume"}
      </button>

      {resume && (
        <div style={{ marginTop: "40px", whiteSpace: "pre-wrap" }}>
          <h2>Generated Resume</h2>
          <p>{resume}</p>
        </div>
      )}
    </main>
  );
}