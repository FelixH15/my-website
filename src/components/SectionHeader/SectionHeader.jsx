import styles from "./SectionHeader.module.css";

export default function SectionHeader({ index, label, className = "" }) {
  return (
    <header className={`${styles.root} ${className}`}>
      <span className={`mono ${styles.index}`}>{index}</span>
      <div className={styles.labelRow}>
        <h2 className={`display ${styles.label}`}>{label}</h2>
        <span className={styles.rule} aria-hidden="true" />
      </div>
    </header>
  );
}
