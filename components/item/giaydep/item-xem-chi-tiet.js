import styles from "./item.module.css";
import { useRouter } from "next/router";
import { Button3 } from "../../buttons/button3/button3";
import { Button4 } from "../../buttons/button4/button";

export function Item({ ten, gia, khoiLuong, image,doBen,mauSac,phongThu }) {
  const router = useRouter();
  function xemChiTiet(){
    router.push({
      pathname: "/giaydep/chi-tiet",
    });
  }
  return (
    <div className={styles.item}>
      <div>Tên:{ten}</div>
      <div>Giá:{gia}</div>
      <div>Khối lượng: {khoiLuong}</div>
      <div>Độ Bền:{doBen}</div>
      <div>Màu Sắc:{mauSac}</div>
      <div>Phòng thủ:{phongThu}</div>
      <div>
        <img src={image} width={"100px"} height={"100px"} />
      </div>

      <Button3 text={"Thêm vào giỏ hàng"} />
      <Button4 text={"Thêm vào yêu thích"} />
    </div>
  );
}
