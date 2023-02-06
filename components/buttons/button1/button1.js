import styles from "./button1.module.css";
import { useRouter } from "next/router";

export function Button1({text}) {
 

  return (
    <button className={styles.button1}>
        {text}
    </button>
  );
}
