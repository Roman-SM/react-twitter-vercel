// import { useContext } from "react"
// import { THEME_TYPE, ThemeContext } from "../../App"
import styles from "./index.module.css";

export default function Component({ children, className = "", style = {} }) {
  // const theme = useContext(ThemeContext)
  return (
    <div style={style} className={`${styles.box} ${className}`}>
      {children}
    </div>
    // <div style={{...style, background: theme.value === THEME_TYPE.DARK && "black"}} className={`box ${className}`}>{children}</div>
  );
}
