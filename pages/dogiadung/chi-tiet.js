import { Layout1 } from "../../components/layout/layout1";
import { useState } from "react";
import { Item } from "../../components/item/dogiadung/item";
export default function ChiTiet() {
  const [sanPham, setSanPham] = useState([
    {
      name: "Bếp Điện Tử",
      soLuong: 6000,
      doCung:100,
      mauSac:"đỏ",
      tanCong:135,
      image: "https://cdn.tgdd.vn/ValueIcons/bep-tu-doi.png",
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