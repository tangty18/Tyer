import styles from "./button.module.css";
import { useRouter } from "next/router";

export function Button1({text, xemChiTiet}) {
 

  return (
    <button className={styles.button1} onClick={xemChiTiet}>
        {text}
    </button>
  );
}
