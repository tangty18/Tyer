import styles from "./item.module.css";
import { useRouter } from "next/router";

export function Item({ ten, gia, size, image,mauSac }) {
  const router = useRouter();

  return (
    <div className={styles.item}>
      <div>Tên:{ten}</div>
      <div>Giá:{gia}</div>
      <div>Màu Sắc: {mauSac}</div>
      <div>Size:{size}</div>

      <div>
        <img src={image} width={"100px"} height={"100px"} />
      </div>
    </div>
  );
}