import styles from "./header2.module.css";
import { useRouter } from "next/router";

export function Header2() {
  const router = useRouter();
  function veTrangChu() {
    router.push({
      pathname: "/",
    });
  }

  return (
    <div className={styles.header2}>
      <div onClick={veTrangChu} className={styles.logo}>
        TYer
        </div>
      </div>)
}