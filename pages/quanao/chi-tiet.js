import { Layout1 } from "../../components/layout/layout1";
import { useState } from "react";
import { Item } from "../../components/item/quanao/item";
export default function ChiTiet() {
  const [sanPham, setSanPham] = useState([
    {
      name: "Áo thun",
      soLuong: 6000,
      mauSac:"Đỏ",
      size:30,
      image:
        "https://product.hstatic.net/1000357687/product/1_6f661df1e8b44c58bf89a7961b42d184_master.jpg",
    }])
    return <div>
         <div>
      {sanPham.map((item) => (
        <Item
          ten={item.name}
          gia={item.soLuong}
          image={item.image}
          size={item.size}
          mauSac={item.mauSac}
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