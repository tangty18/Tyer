import styles from "./item.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { fetchDataClientSite } from "../../../tools/axios";

export function ItemGioHang({
  masp,
  soluong,
  ten,
  gia,
  image,
  id_sanpham,
  setDanhSachSP,
  danhSachSP,
}) {
  const router = useRouter();
  const [soLuong, setSoLuong] = useState(soluong);

  async function tangMot() {
    await fetchDataClientSite.put("/api/gio-hang/giohang", {
      soluong: soLuong + 1,
      id_product: id_sanpham,
    });
    setSoLuong(soLuong + 1);
  }

  async function giamMot() {
   
    if (soLuong <= 1) {
      await fetchDataClientSite.delete("/api/gio-hang/giohang" + `?id_product=${id_sanpham}`, {
        id_product: id_sanpham,
      });


      let newDSSP = [...danhSachSP];
      newDSSP = newDSSP.filter((value) => value.id_sanpham != id_sanpham);


      setDanhSachSP(newDSSP);
      //setSoLuong(0);
    } else {
      await fetchDataClientSite.delete("/api/gio-hang/giohang" + `?id_product=${id_sanpham}`, {
        soluong: soLuong - 1,
        id_product: id_sanpham,
      });
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

      <button className={styles.button} onClick={tangMot}>
        +
      </button>
      <button className={styles.button} onClick={giamMot}>
        -
      </button>
    </div>
  );
}
