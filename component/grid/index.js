import styles from "./index.module.css";

export default function Component({ children }) {
  return <div className={styles.grid}>{children}</div>;
}
