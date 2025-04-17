import styles from "./index.module.css";
import { memo } from "react";
import Grid from "../grid";

function Container({ username, text, date }) {
  return (
    <Grid>
      <div className={styles.postContent}>
        <span className={styles.postContent__username}>@{username}</span>
        <span className={styles.postContent__date}>{date}</span>
      </div>
      <p className={styles.postContent__text}>{text}</p>
    </Grid>
  );
}

export default memo(Container);
