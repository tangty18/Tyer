import { Layout1 } from "../../components/layout/layout1";
import { useState } from "react";
import { fetchData } from "../../tools/axios";
import { Item } from "../../components/item/but/item-chi-tiet";
export default function ChiTiet({ props }) {
  const [sanPham, setSanPham] = useState(props.motCayBut);
  return (
    <div>
      <div>
        {sanPham.map((item) => (
          <Item
            ten={item.name}
            gia={item.soLuong}
            image={item.image}
            khoiLuong={item.khoiLuong}
          />
        ))}
      </div>
    </div>
  );
}
ChiTiet.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <ChiTiet props={page.props} />
    </Layout1>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const { data } = await fetchData.get("/but/lay-1-cay");
  // Pass data to the page via props
  return { props: { motCayBut: data } };
}
