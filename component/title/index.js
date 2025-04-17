import styles from "./index.module.css";

export default function Component({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}
