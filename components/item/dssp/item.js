import styles from "./item.module.css";
import { useRouter } from "next/router";
import { Button3 } from "../../buttons/button3/button3";
import { Button1 } from "../../buttons/button1/button1";


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