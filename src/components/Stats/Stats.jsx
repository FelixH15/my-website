import styles from "./Stats.module.css";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "3", label: "Featured Projects" },
  { value: "4", label: "Professional Roles" },
  { value: "IBM", label: "Current Role" },
];

export default function Stats() {
  return (
    <section className={styles.band} aria-label="At a glance">
      {stats.map((stat) => (
        <div key={stat.label} className={styles.item}>
          <span className={`display ${styles.value}`}>{stat.value}</span>
          <span className={`mono ${styles.label}`}>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}
