import styles from "./button2.module.css";
import { useRouter } from "next/router";

export function Button2({text}) {
 

  return (
    <button className={styles.button2}>
        {text}
    </button>
  );
}
