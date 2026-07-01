import styles from "./SectionHeader.module.css";

export default function SectionHeader({ label, className = "" }) {
  return (
    <h1 className={`display ${styles.label} ${className}`}>/{label}</h1>
  );
}
