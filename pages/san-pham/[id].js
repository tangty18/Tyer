import { Layout1 } from "../../components/layout/layout1";
import { useState } from "react";
import { fetchData } from "../../tools/axios";
import { Item } from "../../components/item/item-chi-tiet";
export default function ChiTiet({ props }) {
  const [sanPham, setSanPham] = useState(props.motCayBut);
  return (
    <div>
      <div>
        {sanPham.map((item) => (
          <Item
            ten={item.ten}
            gia={item.gia}
            image={item.hinhanh}
            khoiLuong={item.khoiLuong || 0}
            soluong={item.soluong}
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

export async function getServerSideProps(context) {
  // Fetch data from external API
 
  const { data } = await fetchData.post("/sanpham/get-one",{
    id: context.query.id,
    type:context.query.type
  });


  // Pass data to the page via props
  return { props: { motCayBut: data } };
}
