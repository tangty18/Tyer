import styles from "./item.module.css";
import { useRouter } from "next/router";
import { Button3 } from "../../buttons/button3/button3";
import { Button4 } from "../../buttons/button4/button";
import { Button1 } from "../../buttons/button1/button1";

export function Item({ ten, gia, size, image,mauSac }) {
  const router = useRouter();
  function xemChiTiet(){
    router.push({
      pathname: "/quanao/chi-tiet",
    });
  }
  return (
    <div className={styles.item}>
      <div>Tên:{ten}</div>
      <div>Giá:{gia}</div>
      <div>Màu Sắc: {mauSac}</div>
      <div>Size:{size}</div>

      <div>
        <img src={image} width={"100px"} height={"100px"} />
      </div>
      <Button1 text={"Xem chi tiết"} xemChiTiet={xemChiTiet}/> <br/>
      <Button3 text={"Thêm vào giỏ hàng"} />
      <Button4 text={"Thêm vào yêu thích"} />
    </div>
  );
}