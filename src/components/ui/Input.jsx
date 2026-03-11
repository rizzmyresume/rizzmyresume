export default function Input(props) {
  return (
    <input
      style={{
        padding: "8px 12px",
        borderRadius: "8px",
        border: "1px solid #444",
        background: "#000",
        color: "#fff",
        outline: "none"
      }}
      {...props}
    />
  );
}
