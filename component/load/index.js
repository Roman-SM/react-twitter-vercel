import styles from "./index.module.css";

export const LOAD_STATUS = {
  PROGRESS: "progress",
  SUCCESS: "success",
  ERROR: "error",
};

export function Alert({ message, status = "default" }) {
  return (
    <div className={`${styles.alert} ${styles[`alert--${status}`]}`}>
      {message}
    </div>
  );
}
export function Loader() {
  return <div className={styles.loader}></div>;
}
export function Skeleton() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeleton__item}></div>
      <div className={styles.skeleton__item}></div>
      <div className={styles.skeleton__item}></div>
    </div>
  );
}
