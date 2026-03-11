"use client";

import SectionDivider from "../components/ui/SectionDivider";

import SectionDivider from "../components/ui/SectionDivider";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function HomePage() {
  return (
    <main className="home-page">
      <section
        className="hero-block"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Card>
          <h1 style={{ margin: 0, marginBottom: "12px" }}>RizzMyResume</h1>
          <p style={{ margin: 0, marginBottom: "16px", maxWidth: 420 }}>
            Paste your job description, upload your experience, and get an
            AI-tailored resume and match score in seconds.
          </p>
          <Button onClick={() => (window.location.href = "/dashboard")}>
            Get started
          </Button>
        </Card>
      </section>

      <SectionDivider />

      <section
        className="hero-block"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <p>Section for how it works / steps (coming soon).</p>
      </section>

      <SectionDivider />

      <section
        className="hero-block tall"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <p>Section for testimonials or sample resumes (coming soon).</p>
      </section>
    </main>
  );
}
