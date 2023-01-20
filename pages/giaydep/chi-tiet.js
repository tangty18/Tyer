import { Layout1 } from "../../components/layout/layout1";
import { useState } from "react";
import { Item } from "../../components/item/giaydep/item";

export default function ChiTiet() {
  const [sanPham, setSanPham] = useState([
    {
      name: "Dép",
      soLuong: 6000,
      doben:"chó cắn không đứt",
      phongThu:5000,
      mauSac:"xanh",
      image: "https://cf.shopee.vn/file/582170e1c0ba7c882fc20048cc32f549",
    }])
    return <div>
      <div>
        {sanPham.map((item) => (
          <Item
            ten={item.name}
            gia={item.soLuong}
            image={item.image}
            khoiLuong={item.khoiLuong}
            doBen={item.doBen}
            mauSac={item.mauSac}
            phongThu={item.phongThu}
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