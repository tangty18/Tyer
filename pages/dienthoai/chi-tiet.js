import { Layout1 } from "../../components/layout/layout1";
import { useState } from "react";
import { Item } from "../../components/item/dienthoai/item";
export default function ChiTiet() {
  const [sanPham, setSanPham] = useState([
    {
      name: "Điện Thoại Bàn",
      soLuong: 23000,
      hang: "Soni",
      gioiTinh: "nam",
      tocDo: 150,
      khoiLuong: 13,
      image:
        "https://cdn01.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_344/dien-thoai-ban-panascl_450.png.webp",
    }])
  return <div>
    <div>
      {sanPham.map((item) => (
        <Item
          ten={item.name}
          gia={item.soLuong}
          image={item.image}
          khoiLuong={item.khoiLuong}
          hang={item.hang}
          tocDo={item.tocDo}
          gioiTinh={item.gioiTinh}
        />
      ))}
    </div>
  </div>;
}
ChiTiet.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <ChiTiet />
    </Layout1>
  );
};