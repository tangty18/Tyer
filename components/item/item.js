import styles from "./item.module.css";
import { useRouter } from "next/router";
import { MdAddShoppingCart } from "react-icons/md";
import { GiHeartPlus } from "react-icons/gi";
import { fetchDataClientSite } from "../../tools/axios";

export function Item({ id, ten, soluong, khoiLuong, image, gia }) {
  const router = useRouter();

  function xemChiTiet() {
    router.push({
      pathname: "/san-pham/[id]",
      query: {
        ...router.query,
        id: id,
      },
    });
  }

  async function themVaogioHang(id) {
    const { data } = await fetchDataClientSite.post("/api/gio-hang/giohang", {
      id_product: id,
    });
    alert("Thêm Vào Giỏ Hàng " + id + "thành Công");
  }
  async function themVaoYeuThich(id) {
    const { data } = await fetchDataClientSite.post("/api/yeu-thich/them-but", {
      id_product: id,
    });
    alert("Thêm Vào Yêu Thích " + id + "thành Công");
  }

  return (
    <div  className={styles.item}>
      <div onClick={xemChiTiet} className={styles.img}>
        <div>
          <img src={image} width={300} height={500} />
        </div>
      </div>
      {/*<div>ID:{id}</div>*/}
      <div onClick={xemChiTiet} className={styles.item_name}>
        <div className={styles.name}>{ten}</div>
      </div>
      <div className={styles.gia}>
        <div className={styles.price_old}>
       
          <span>{gia}</span>
        </div>
        <div className={styles.price_current}>
          <span>Giá Mới</span>: 
          <span>{gia}</span>
        </div>
       {/* <div className={styles.acction}>
          <div>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
  </div>*/}
      
      </div>
    
      <MdAddShoppingCart
        onClick={() => themVaogioHang(id)}
        size={30}
        color={"Green"}
        cursor={"pointer"}
      />
      <GiHeartPlus
        onClick={() => themVaoYeuThich(id)}
        size={30}
        color={"Pink"}
        cursor={"pointer"}
      />
    </div>
  );
}
