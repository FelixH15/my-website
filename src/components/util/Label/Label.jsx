import styles from "./Label.module.css";

export default function Label({ children }) {
  return (
    <div>
      <p
        className={`px-4 py-2 text-base font-bold rounded-xl ${styles.text}`}
        style={{
          lineHeight: "28px",
          backgroundColor: "var(--secondary-bg-color)",
          color: "var(--white)",
        }}
      >
        {children}
      </p>
    </div>
  );
}
