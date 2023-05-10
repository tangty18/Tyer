import styles from "./item.module.css";
import { useRouter } from "next/router";


export function ItemGioHang({soluong, ten, gia, khoiluong, image}) {
  const router = useRouter();
console.log(khoiluong)
  return (
    <div className={styles.item}>
      <div>Tên:{ten}</div>
      <div>Giá:{gia}</div>
      <div>Khối lượng: {khoiluong}</div>
      <div>Số Lượng:{soluong}</div>
      <div>Tiền: {gia * soluong}</div>

      <div>
        <img src={image} width={"100px"} height={"100px"} />
      </div>
    </div>
  );
}