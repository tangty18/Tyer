import styles from "./footer1.module.css";
import { useRouter } from "next/router";
export function Footer2() {
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
  const openInNewTab = () => {
    const newWindow = window.open(
      "https://www.facebook.com/profile.php?id=100084156063521",
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  const openInNewTab2 = () => {
    const newWindow = window.open(
      "https://www.youtube.com/channel/UCpuauVqOqAO-29hZz2HwzDw",
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };



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
  <div className={styles.donate} onClick={openInNewTab}>Donate</div>
  <div className={styles.youtube} onClick={openInNewTab2}>Youtube</div>

</div>
);
}
