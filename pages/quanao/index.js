import { useState } from "react";
import styles from "./quanao.module.css";
import { Layout1 } from "../../components/layout/layout1";
import { Item } from "../../components/item/but/item";
export default function QuanAo() {
  const [danhSachSP, setDanhSachSP] = useState([
    {
      name: "Áo Sơ Mi",
      soLuong: 23000,
      image:
        "https://cdn2.yame.vn/pimg/so-mi-nam-no-style-td-km18-0018246/31aadf2f-485f-0200-f8e0-001823d06909.jpg?w=540&h=756",
    },
    {
      name: "Áo Khoác",
      soLuong: 15000,
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/415/697/products/m0w2iuvv-1-1hxj-hinh-mat-truoc-01-773b266a-c405-45d5-b508-87327f1f0062.jpg",
    },
    {
      name: "Áo hoodie",
      soLuong: 50000,
      image: "https://cf.shopee.vn/file/e9a1464780d98ef4ef9b9c32ce8e02b8",
    },
    {
      name: "Áo Ba lỗ",
      soLuong: 50000,
      image:
        "https://linhvnxk.com/wp-content/uploads/2020/06/ao-ba-lo-trang-xuat-khau-4.jpg",
    },
    {
      name: "Áo thun",
      soLuong: 6000,
      image:
        "https://product.hstatic.net/1000357687/product/1_6f661df1e8b44c58bf89a7961b42d184_master.jpg",
    },
    {
      name: "Áo Sơ Mi",
      soLuong: 23000,
      image:
        "https://cdn2.yame.vn/pimg/so-mi-nam-no-style-td-km18-0018246/31aadf2f-485f-0200-f8e0-001823d06909.jpg?w=540&h=756",
    },
    {
      name: "Áo Khoác",
      soLuong: 15000,
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/415/697/products/m0w2iuvv-1-1hxj-hinh-mat-truoc-01-773b266a-c405-45d5-b508-87327f1f0062.jpg",
    },
    {
      name: "Áo hoodie",
      soLuong: 50000,
      image: "https://cf.shopee.vn/file/e9a1464780d98ef4ef9b9c32ce8e02b8",
    },
    {
      name: "Áo Ba lỗ",
      soLuong: 50000,
      image:
        "https://linhvnxk.com/wp-content/uploads/2020/06/ao-ba-lo-trang-xuat-khau-4.jpg",
    },
    {
      name: "Áo thun",
      soLuong: 6000,
      image:
        "https://product.hstatic.net/1000357687/product/1_6f661df1e8b44c58bf89a7961b42d184_master.jpg",
    },
  ]);
  const [ketQuaTimKiem, setKetquaTimKiem] = useState([]);
  const [input, setInput] = useState("");

  function inputValue(event) {
    setInput(event.target.value);
  }

  function timKiem() {
    const result = danhSachSP.filter((item) => {
      return coTrongChuoiKhong(item.name, "");
    });
    setKetquaTimKiem(result);
  }
  function coTrongChuoiKhong(chuoi, tuKhoa) {
    let chuoiMoi = chuoi.toLowerCase();
    let tuKhoaMoi = tuKhoa.toLowerCase();

    return chuoiMoi.includes(tuKhoaMoi);
  }

  return (
    <div>
      <div className={styles.container}></div>
    </div>
  );
}

QuanAo.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <QuanAo />
    </Layout1>
  );
};
