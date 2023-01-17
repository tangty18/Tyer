import styles from "./button.module.css";
import { useRouter } from "next/router";

export function Button4({text}) {
 

  return (
    <button className={styles.button1}>
        {text}
    </button>
  );
}