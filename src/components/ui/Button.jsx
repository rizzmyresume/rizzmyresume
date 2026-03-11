export default function Button({ children, ...props }) {
  return (
    <button
      style={{
        padding: "8px 16px",
        borderRadius: "999px",
        border: "1px solid #444",
        background: "#111",
        color: "#fff",
        cursor: "pointer"
      }}
      {...props}
    >
      {children}
    </button>
  );
}
