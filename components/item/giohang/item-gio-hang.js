import styles from "./item.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { fetchDataClientSite } from "../../../tools/axios";

export function ItemGioHang({masp, soluong, ten, gia, image,id_sanpham }) {
  const router = useRouter();
  const [soLuong, setSoLuong] = useState(soluong);

    async function tangMot() {
await fetchDataClientSite.put("/api/gio-hang/giohang",{
  soluong:soLuong + 1,
  id_product:id_sanpham
})
    setSoLuong(soLuong + 1);
  }

  async function giamMot() {
    await fetchDataClientSite.put("/api/gio-hang/giohang",{
      soluong:soLuong - 1,
      id_product:id_sanpham
    })
    if (soLuong <= 1) {
      setSoLuong(0);
    } else {
      setSoLuong(soLuong - 1);
    }
  }
  return (
    <div className={styles.item}>
      <div>Tên:{ten}</div>
      <div>Giá:{gia}</div>
      <div>Số Lượng:{soLuong}</div>
      <div>Tiền: {gia * soLuong}</div>
      <div>
        <img src={image} width={"100px"} height={"100px"} />
      </div>

      <button className={styles.button} onClick={tangMot}>+</button>
      <button className={styles.button} onClick={giamMot}>-</button>
    </div>
  );
}
