import { Layout1 } from "../../components/layout/layout1";
import { useState } from "react";
import { Item } from "../../components/item/but/item";
export default function ChiTiet() {
  const [sanPham, setSanPham] = useState([
    {
      name: "Bút Chì",
      soLuong: 23000,
      khoiLuong: 13,
      image:
        "http://img.websosanh.vn/v2/users/root_product/images/but-chi-go-2b-thien-long-gp02/2jgr174h4dbhl.jpg",
    }])
  return <div>
       
  </div>
}
ChiTiet.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <ChiTiet />
    </Layout1>
  );
};