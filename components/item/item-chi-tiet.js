import styles from "./item.module.css";
import {MdAddShoppingCart} from "react-icons/md"
import {GiHeartPlus} from "react-icons/gi"
import { useRouter } from "next/router";
import { fetchDataClientSite } from "../../tools/axios";

export function Item({ id,ten, gia, soluong, image }) {
  const router = useRouter();
  const id_san_pham = router.query.id_chi_tiet

  async function themVaogioHang(id){
  
    const {data} = await fetchDataClientSite.post("/api/gio-hang/them-do-gia-dung",{
      id_product:id
    })
    alert('Thêm Vào Giỏ Hàng '+ id + 'thành Công')

  }
  async function themVaoYeuThich(id){
    const {data} = await fetchDataClientSite.post("/api/yeu-thich/them-do-gia-dung",{
      id_product:id
    })
    alert('Thêm Vào Yêu Thích '+ id + 'thành Công')
  }

  return (
    <div className={styles.item}>
      {/*<div>ID:{id}</div>*/}
      <div>
        <img src={image} width={"300px"} height={"500px"} />
      </div>
      <div className={styles.item_name}>{ten}</div>
     <div>
        <span className={styles.price_old}>{gia}</span>
        <span className={styles.price_current}>Giá Mới:{gia}</span>
     </div>
      <div>Số lượng:{soluong}</div>
   
      <MdAddShoppingCart onClick={()=>themVaogioHang(id_san_pham)} size={30} color={"Green"} cursor={"pointer"}/>
      <GiHeartPlus onClick={()=>themVaoYeuThich(id_san_pham)} size={30} color={"Pink"} cursor={"pointer"}/>
    </div>
  );
}
