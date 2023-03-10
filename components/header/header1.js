import styles from "./header1.module.css";
import { useRouter } from "next/router";
import {VscAccount} from "react-icons/vsc"
import { AiOutlineShoppingCart } from "react-icons/ai";
import {AiFillHeart} from "react-icons/ai"
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
  function xemGioHang() {
    router.push({
      pathname: "/giohang",
    });
  }
  function dangNhap() {
    router.push({
      pathname: "/login",
    });
  }

  function veTrangChu() {
    router.push({
      pathname: "/",
    });
  }
  function danhSachSP() {
    router.push({
      pathname: "/dssp",
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
      <div className={styles.dssp} onClick={danhSachSP}>
        <AiFillHeart title="Danh Sách Sản Phẩm Yêu Thích" size={30} color={"pink"}/>
      </div>
      <div className={styles.gio_hang} onClick={xemGioHang}>
        <AiOutlineShoppingCart title="Gio hang" size={30} color={"red"} />
      </div>
      <div className={styles.dang_nhap} onClick={dangNhap}>
        <VscAccount title="Đăng Nhập" size={30} color={"white"}/>
      </div>
    </div>
  );
}
