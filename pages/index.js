import { useRouter } from "next/router";
import { useState } from "react";
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

  function xemChiTiet(key) {
    router.push({
      pathname: "/" + key,
    });
  }

  return (
    <>
      {theLoaiSP.map((item) => (
        <div>
          Thể loại: {item.theLoai}{" "}
          <button onClick={() => xemChiTiet(item.key)}>Xem Chi Tiết</button>
        </div>
      ))}

      <img
        src="https://vatvostudio.vn/wp-content/uploads/2022/09/rogphone6d.jpeg"
        alt="Ảnh"
        width={500}
      />
      <button onClick={goHome}>Đừng Nhấn</button>
      <button onClick={goHome1}>Đừng Nhấn 2</button>
    </>
  );
}
