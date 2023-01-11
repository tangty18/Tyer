import styles from "./header1.module.css";
import { useRouter } from "next/router";

export function Header1() {
  const router = useRouter();

  function xemBut() {
    router.push({
      pathname: "/but",
    });
  }

  function xemQuanAo() {
    router.push({
      pathname: "/quanao",
    });
  }
  function xemDienThoai() {
    router.push({
      pathname: "/dienthoai",
    });
  }
  function xemMayTinh() {
    router.push({
      pathname: "/mayting",
    });
  }
  function xemGiayDep() {
    router.push({
      pathname: "/giaydep",
    });
  }
  function xemDoGiaDung() {
    router.push({
      pathname: "/dogiadung",
    });
  }



  function veTrangChu() {
    router.push({
      pathname: "/",
    });
  }

  return (
    <div className={styles.header1}>
      <div onClick={veTrangChu} className={styles.logo}>
        TYer
      </div>
      <div className={styles.item} onClick={xemBut}>
        Xem bút
      </div>
      <div className={styles.item} onClick={xemQuanAo}>
        Xem quần áo
      </div>
      <div className={styles.item} onClick={xemDienThoai}>
        Xem điện thoại
      </div>
      <div className={styles.item} onClick={xemMayTinh}>
        Xem Máy Tính
      </div>
      <div className={styles.item} onClick={xemGiayDep}>
        Xem giày dép
      </div>
      <div className={styles.item} onClick={xemDoGiaDung}>
        Xem đồ gia dụng
      </div>

    </div>
  );
}
