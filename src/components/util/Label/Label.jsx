export default function Label({ children }) {
  return (
    <p
      className="px-4 py-2 text-base font-bold rounded-xl"
      style={{
        lineHeight: "28px",
        backgroundColor: "var(--secondary-bg-color)",
        color: "var(--white)",
      }}
    >
      {children}
    </p>
  );
}
