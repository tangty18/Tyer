import styles from "./item.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

export function ItemGioHang({masp, soluong, ten, gia, image }) {
  const router = useRouter();
  const [soLuong, setSoLuong] = useState(soluong);

  function tangMot() {
    setSoLuong(soLuong + 1);
  }

  function giamMot() {
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
      <div>Số Lượng:{soluong}</div>
      <div>Tiền: {gia * soluong}</div>
      <div>
        <img src={image} width={"100px"} height={"100px"} />
      </div>

      <button onClick={tangMot}>+</button>
      <button onClick={giamMot}>-</button>
    </div>
  );
}
