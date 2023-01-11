import styles from "./footer1.module.css";
import { useRouter } from "next/router";
export function Footer1() {
  const router = useRouter();


  function about() {
    router.push({
      pathname: "/about",
    });
  }

  function contact() {
    router.push({
      pathname: "/contact",
    });
  }

  function support() {
    router.push({
      pathname: "/support",
    });
  }

  function veTrangChu() {
    router.push({
      pathname: "/",
    });
  }




  return (
  <div className={styles.footer1}>
  <div onClick={veTrangChu} className={styles.logo}>
    footer
  </div>
  <div className={styles.item} onClick={about}>
    Về Chúng Tôi
  </div>
  <div className={styles.item} onClick={contact}>
    Liên Hệ
    </div>
   <div className={styles.item} onClick={support}>
    hỗ trợ
  </div>
</div>
);
}
