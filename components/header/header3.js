import styles from "./header3.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
export function Header3() {
  const router = useRouter();
  function veTrangChu() {
    router.push({
      pathname: "/",
    });
  }

    return (
        <div className={styles.header3}>
          <div className={styles.logo} onClick={veTrangChu}>
            TYER
          </div>
          <div className={styles.item}>
            <Link href="/but">Xem Bút</Link>
          </div>
          <div className={styles.item}>
            <Link href="/dienthoai">Xem Điện Thoại</Link>
          </div>
          <div className={styles.item}>
            <Link href="/dogiadung">Xem Đồ Gia Dụng</Link>
          </div>
          <div className={styles.item}>
            <Link href="/giaydep">Xem Giày Dép</Link>
          </div>
          <div className={styles.item}>
            <Link href="/mayting">Xem Máy Tính</Link>
          </div>
          <div className={styles.item}>
            <Link href="/quanao">Xem Quần Áo</Link>
          </div>
          </div>
       




)


}