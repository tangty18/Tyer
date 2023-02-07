import { Layout1 } from "../../components/layout/layout1";
import { useState } from "react";
import { Item } from "../../components/item/dienthoai/item-xem-chi-tiet";
import { fetchData } from "../../tools/axios";
export default function ChiTiet({props}) {
  const [sanPham, setSanPham] = useState(props.motChiecDienThoai)
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
      <ChiTiet props={page.props}/>
    </Layout1>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const { data } = await fetchData.get("/dienthoai/lay-1");
  // Pass data to the page via props
  return { props: { motChiecDienThoai: data } };
}