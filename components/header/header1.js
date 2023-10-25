import styles from "./header1.module.css";
import { useRouter } from "next/router";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { fetchDataNew } from "../../tools/axios";
import { useEffect, useState } from "react";

export function Header1() {
  const router = useRouter();
  const [login, setLogin] = useState(false);
  const [ten, setTen] = useState("");
  useEffect(() => {
    async function getProfile() {
      const { data } = await fetchDataNew.get("api/profile/hoso");
      setLogin(data?.isLogin);
      setTen(data?.user?.ten);
    }

    getProfile();
  }, []);

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

  function dangXuat() {
    // retrieve all cookies
    var Cookies = document.cookie.split(";");
    // set past expiry to all cookies
    for (var i = 0; i < Cookies.length; i++) {
      document.cookie = Cookies[i] + "=; expires=" + new Date(0).toUTCString();
    }
    router.replace("/").then(() => router.reload());
  }

  function xemDienThoai() {
    router.push({
      pathname: `/san-pham`,
      query: {
        type: "dienthoai", // pass the id
      },
    })
    
    
  }

  function xemBut() {
    router.push({
      pathname: `/san-pham`,
      query: {
        type: "but", // pass the id
      },
    });
  }
  function xemDoGiaDung() {
    router.push({
      pathname: `/san-pham`,
      query: {
        type: "dogiadung", // pass the id
      },
    });
   
  }
  function xemGiayDep() {
    router.push({
      pathname: `/san-pham`,
      query: {
        type: "giaydep", // pass the id
      },
    });
   
  }
  function xemMayTinh() {
    router.push({
      pathname: `/san-pham`,
      query: {
        type: "maytinh", // pass the id
      },
    });

  }
  function xemQuanAo() {
    router.push({
      pathname: `/san-pham`,
      query: {
        type: "quanao", // pass the id
      },
    });

  }

  return (
    <div>
      <div className={styles.top_header}> halo </div>
      <hr></hr>
      <div className={styles.header1}>
      <div onClick={veTrangChu} className={styles.logo}>
        TYER
      </div>
      <div className={styles.item} onClick={xemBut}>
        Xem Bút
      </div>
      <div className={styles.item} onClick={xemDienThoai}>
        Xem Điện Thoại
      </div>
      <div className={styles.item} onClick={xemDoGiaDung}>
        Xem Đồ Gia Dụng
      </div>
      <div className={styles.item} onClick={xemGiayDep}>
        Xem Giày Dép
      </div>
      <div className={styles.item} onClick={xemMayTinh}>
        Xem Máy Tính
      </div>
      <div className={styles.item} onClick={xemQuanAo}>
        Xem Quần Áo
      </div>
      <div className={styles.dssp} onClick={danhSachSP}>
        <AiFillHeart
          title="Danh Sách Sản Phẩm Yêu Thích"
          size={30}
          color={"pink"}
        />
      </div>
      <div className={styles.gio_hang} onClick={xemGioHang}>
        <AiOutlineShoppingCart title="Gio hang" size={30} color={"red"} />
      </div>
      {!login && (
        <div className={styles.dang_nhap} onClick={dangNhap}>
          <VscAccount title="Đăng Nhập" size={30} color={"white"} />
        </div>
      )}
      {login && <div className={styles.user}>Xin Chao,{ten} </div>}

      {login && (
        <div onClick={dangXuat} className={styles.dangXuat}>
          {" "}
          Dang Xuat{" "}
        </div>
         )}
        </div>
      
    
     
    </div>
  );
}
