import { useRouter } from "next/router";
import styles from "./trangchu.module.css";
import { useState } from "react";
import { Layout1 } from "../components/layout/layout1";
export default function Home() {
  const router = useRouter();
  const [theLoaiSP, setTheLoaiSP] = useState([
    {
      theLoai: "Bút",
      key: "but",
    },
    {
      theLoai: "Quần Áo",
      key: "quanao",
    },
    {
      theLoai: "Điện thoại",
      key: "dienthoai",
    },
    {
      theLoai: "Máy tính",
      key: "mayting",
    },
    {
      theLoai: "giày dép",
      key: "giaydep",
    },
    {
      theLoai: "Đồ Gia dụng",
      key: "dogiadung",
    },
  ]);

  function goHome() {
    router.push({
      pathname: "/homepage",
    });
  }

  function goHome1() {
    router.push({
      pathname: "/testhome",
    });
  }

  function goAdmin() {
    router.push({
      pathname: "/them-sp",
    });
  }



  function xemChiTiet(key) {
    router.push({
      pathname: "/" + key,
    });
  }

  return (
    <div className={styles.app}>
      {theLoaiSP.map((item) => (
        <div>
          Thể loại: {item.theLoai}{" "}
          <button onClick={() => xemChiTiet(item.key)}>Xem Chi Tiết</button>
        </div>
      ))}

      <div className={styles.sanpham}>

      </div>
      
      <div className={styles.css}>
      <button onClick={goHome}>Đừng Nhấn</button>
      <button onClick={goHome1}>Đừng Nhấn 2</button>
      <button onClick={goAdmin}>Go to admin</button>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <Home />
    </Layout1>
  );
};
