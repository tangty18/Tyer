import styles from "./button4.module.css";
import { useRouter } from "next/router";

export function Button4({text}) {
 

  return (
    <button className={styles.button4}>
        {text}
    </button>
  );
}