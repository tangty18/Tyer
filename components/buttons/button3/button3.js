import styles from "./button3.module.css";
import { useRouter } from "next/router";

export function Button3({text}) {
 

  return (
    <button className={styles.button3}>
        {text}
    </button>
  );
}
