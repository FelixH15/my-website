import styles from "./Label.module.css";

export default function Label({ children }) {
  return <span className={styles.chip}>{children}</span>;
}
