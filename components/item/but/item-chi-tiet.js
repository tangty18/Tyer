import styles from "./item.module.css";
import {MdAddShoppingCart} from "react-icons/md"
import {GiHeartPlus} from "react-icons/gi"
import { fetchDataClientSite } from "../../../tools/axios";
import { useRouter } from "next/router";

export function Item({ id,ten, gia, khoiLuong, image }) {

  const router = useRouter();

  async function themVaogioHang(id){
    // alert('Thêm Vào Giỏ Hàng '+ id + 'thành Công')
   //  const {data} = await fetchDataClientSite.post("api/gio-hang/them-chi-tiet-but",{
    //   id_product:id
   //  })
     alert('Thêm Vào Giỏ Hàng '+ id + 'thành Công')
 
   }

   function themVaoYeuThich(id){
    alert('Thêm Vào Yêu Thích '+ id + 'thành Công')

  }


  return (
    <div className={styles.item}>
      {/*<div>ID:{id}</div>*/}
      <div>Tên:{ten}</div>
      <div>Giá:{gia}</div>
      <div>Khối lượng: {khoiLuong}</div>
      <div>
        <img src={image} width={"100px"} height={"100px"} />
      </div>
      <MdAddShoppingCart onClick={()=>themVaogioHang(id)} size={30} color={"Green"}/>
      <GiHeartPlus onClick={()=>themVaoYeuThich(id)} size={30} color={"Pink"}/>
    </div>
  );
}
