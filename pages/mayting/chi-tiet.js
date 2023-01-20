import { Layout1 } from "../../components/layout/layout1";
import { useState } from "react";
import { Item } from "../../components/item/mayting/item";
export default function ChiTiet() {
  const [sanPham, setSanPham] = useState([
    {
      name: "ROG",
      soLuong: 6000,
      namRamat:2019,
      khoiLuong:109,
      sucManh:500,
      image:
        "https://fptshop.com.vn/Uploads/Originals/2022/9/30/638001227463678942_asus-gaming-zephyrus-g513-xam-led-4zone-dd.jpg",
    }])

    return <div>
       <div>
      {sanPham.map((item) => (
        <Item
          ten={item.name}
          gia={item.soLuong}
          image={item.image}
          khoiLuong={item.khoiLuong}
          namRaMat={item.namRamat}
          sucManh={item.sucManh}
         
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