import styles from "./item.module.css";
import { useRouter } from "next/router";
import {MdAddShoppingCart} from "react-icons/md"
import {GiHeartPlus} from "react-icons/gi"
import { fetchDataClientSite } from "../../../tools/axios";

export function Item({ ten, gia, size, image,mauSac }) {
  const router = useRouter();
  const id_san_pham = router.query.id_chi_tiet

  async function themVaogioHang(id){
  
    const {data} = await fetchDataClientSite.post("/api/gio-hang/them-quan-ao",{
      id_product:id
    })
    alert('Thêm Vào Giỏ Hàng '+ id + 'thành Công')

  }
  async function themVaoYeuThich(id){
    const {data} = await fetchDataClientSite.post("/api/yeu-thich/them-quan-ao",{
      id_product:id
    })
    alert('Thêm Vào Yêu Thích '+ id + 'thành Công')
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
      <MdAddShoppingCart onClick={()=>themVaogioHang(id_san_pham)} size={30} color={"Green"}/>
      <GiHeartPlus onClick={()=>themVaoYeuThich(id_san_pham)} size={30} color={"Pink"}/>
    </div>
  );
}