export default function Card({ children }) {
  return (
    <div
      style={{
        borderRadius: "16px",
        border: "1px solid #222",
        padding: "16px",
        background:
          "radial-gradient(circle at top left, #222 0, #000 40%, #000 100%)",
        boxShadow: "0 12px 40px rgba(0,0,0,0.7)"
      }}
    >
      {children}
    </div>
  );
}
