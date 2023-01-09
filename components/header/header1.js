import styles from "./header1.module.css";
import { useRouter } from "next/router";

export function Header1() {
  const router = useRouter();

  function xemBut(){
    router.push({
        pathname: "/but",
      });
  }

  function xemQuanAo(){
    router.push({
        pathname: "/quanao",
      });
  }


  return (
    <div className={styles.header1}>
      <div className={styles.item} onClick={xemBut}>Xem bút</div>
      <div className={styles.item} onClick={xemQuanAo}>Xem quần áo</div>
    </div>
  );
}
