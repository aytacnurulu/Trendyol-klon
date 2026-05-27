import styles from "./Spinner.module.css";

export default function Spinner({ size = "md", fullPage = false }) {
  const spinner = (
    <div className={`${styles.spinner} ${styles[size]}`}>
      <span className={styles.ring} />
      <span className={styles.dot} />
    </div>
  );

  if (fullPage) {
    return <div className={styles.overlay}>{spinner}</div>;
  }

  return spinner;
}