import styles from "./item.module.css";
import { useRouter } from "next/router";
import {MdAddShoppingCart} from "react-icons/md"
import {GiHeartPlus} from "react-icons/gi"
import { fetchDataClientSite } from "../../../tools/axios";
export function Item({ id,ten, gia, khoiLuong, image,namRaMat,sucManh }) {
  const router = useRouter();
  const id_san_pham = router.query.id_chi_tiet

  async function themVaogioHang(id){
  
    const {data} = await fetchDataClientSite.post("/api/gio-hang/them-may-ting",{
      id_product:id
    })
    alert('Thêm Vào Giỏ Hàng '+ id + 'thành Công')

  }
  async function themVaoYeuThich(id){
    const {data} = await fetchDataClientSite.post("/api/yeu-thich/them-may-ting",{
      id_product:id
    })
    alert('Thêm Vào Yêu Thích '+ id + 'thành Công')
  }
  return (
    <div className={styles.item}>
      <div>id:{id}</div>
      <div>Tên:{ten}</div>
      <div>Giá:{gia}</div>
      <div>Khối lượng: {khoiLuong}</div>
      <div>Năm Ra mắt:{namRaMat}</div>
      <div>Sức Mạnh:{sucManh}</div>
  
      <div>
        <img src={image} width={"100px"} height={"100px"} />
      </div>

      <MdAddShoppingCart onClick={()=>themVaogioHang(id_san_pham)} size={30} color={"Green"}/>
      <GiHeartPlus onClick={()=>themVaoYeuThich(id_san_pham)} size={30} color={"Pink"}/>
    </div>
  );
}