import styles from "./item.module.css";
import { useRouter } from "next/router";
import { Button3 } from "../../buttons/button3/button3";
import { Button4 } from "../../buttons/button4/button";
import { Button1 } from "../../buttons/button1/buttons";
export function Item({ ten, gia, khoiLuong, image,namRaMat,sucManh }) {
  const router = useRouter();
  function xemChiTiet(){
    router.push({
      pathname: "/mayting/chi-tiet",
    });
  }
  return (
    <div className={styles.item}>
      <div>Tên:{ten}</div>
      <div>Giá:{gia}</div>
      <div>Khối lượng: {khoiLuong}</div>
      <div>Năm Ra mắt:{namRaMat}</div>
      <div>Sức Mạnh:{sucManh}</div>
  
      <div>
        <img src={image} width={"100px"} height={"100px"} />
      </div>
      <Button1 text={"Xem chi tiết"} xemChiTiet={xemChiTiet}/> <br/>
      <Button3 text={"Thêm vào giỏ hàng"} />
      <Button4 text={"Thêm vào yêu thích"} />
    </div>
  );
}