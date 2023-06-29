import { use, useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./giohang.module.css";
import { ItemGioHang } from "../../components/item/giohang/item-gio-hang";
import { Layout1 } from "../../components/layout/layout1";
import { fetchDataClientSite } from "../../tools/axios";
export default function GioHang() {
  const [danhSachSP, setDanhSachSP] = useState([]);
  const [number, setNumBer] = useState(10);

  const router = useRouter();
  function datHang() {
    router.push({
      pathname: "/dat-hang",
    });
  }


  useEffect(() => {
    async function firstReload() {
      const result = await fetchDataClientSite.get("/api/gio-hang/giohang")

      const {data} = result 
      
      setDanhSachSP(data)
       }

    firstReload();
  }, []);


  function hienThiItemGioHang() {
    let items = [];

    for (let i = 0; i < danhSachSP.length; i++) {
      let item = danhSachSP[i];
      items.push(
        <ItemGioHang
          ten={item.ten}
          image={item.hinhanh}
          soluong={item.soluong}
          gia={item.gia}
          masp={item.masp}
          id_sanpham={item.id_sanpham}
          setDanhSachSP = {setDanhSachSP}
          danhSachSP={danhSachSP}
        />
      );
    
    }
    return items;
   
  }


  function tongTien() {
    let tongSoTien = 0;
    for (let i = 0; i < danhSachSP.length; i++) {
      let item = danhSachSP[i];
      tongSoTien = tongSoTien + item.gia * item.soluong;
    }
    return tongSoTien;
  }
  return (
    <div>
      <div>
        <div className={styles.container}>{hienThiItemGioHang()}</div>
      </div>
      <div>tổng tiền : {tongTien()} </div>
      <button onClick={datHang}>Đặt Hàng</button>
      <button >Xóa sạch giỏ hàng</button>
    </div>
  );
}

GioHang.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <GioHang />
    </Layout1>
  );
};
