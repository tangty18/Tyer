import styles from "./item.module.css";
import { useRouter } from "next/router";



export function Item({ ten, gia, khoiLuong, image,soluong }) {
  const router = useRouter();

  return (
    <div className={styles.item}>
      <div>Tên:{ten}</div>
      <div>Giá:{gia}</div>
      <div>Khối lượng: {khoiLuong}</div>
      <div>Số Luọng{soluong}</div>
      <div>
        <img src={image} width={"100px"} height={"100px"} />
      </div>
    </div>
  );
}