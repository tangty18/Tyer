import styles from "./item.module.css";
import { useRouter } from "next/router";
import {MdAddShoppingCart} from "react-icons/md"
import {GiHeartPlus} from "react-icons/gi"
import { fetchDataClientSite } from "../../../tools/axios";
export function Item({ id,ten, gia, khoiLuong, image,namRaMat,sucManh }) {
  const router = useRouter();
  function xemChiTiet(){
    router.push({
      pathname: "/mayting/[id]",
      query:{id:id},
    });
  }
  async function themVaogioHang(id){
    // alert('Thêm Vào Giỏ Hàng '+ id + 'thành Công')
     const {data} = await fetchDataClientSite.post("api/gio-hang/them-may-ting",{
       id_product:id
     })
     alert('Thêm Vào Giỏ Hàng '+ id + 'thành Công')
 
   }
   async function themVaoYeuThich(id){
    const {data} = await fetchDataClientSite.post("api/yeu-thich/them-may-ting",{
      id_product:id
    })
    alert('Thêm Vào Yêu Thích '+ id + 'thành Công')
  }
  return (
    <div className={styles.item}>
      {/*<div>ID:{id}</div>*/}
      <div className={styles.item_tilte}>{ten}</div>
      <div><span className={styles.gia}>Giá</span>:<span className={styles.gia_cu_the}>{gia}</span></div>
      <div>Khối lượng: {khoiLuong}</div>
      <div>Năm Ra mắt:{namRaMat}</div>
      <div>Sức Mạnh:{sucManh}</div>
  
      <div>
        <img src={image} width={"100px"} height={"100px"} />
      </div>
      <button onClick={xemChiTiet}>Xem chi tiết </button> <br />
      <MdAddShoppingCart onClick={()=>themVaogioHang(id)} size={30} color={"Green"}/>
      <GiHeartPlus onClick={()=>themVaoYeuThich(id)} size={30} color={"Pink"}/>
    </div>
  );
}