import { Layout1 } from "../../components/layout/layout1";
import { useState } from "react";
import { Item } from "../../components/item/giaydep/item";
import { fetchData } from "../../tools/axios";
export default function ChiTiet({props}) {
  const [sanPham, setSanPham] = useState(props.motMondo)
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
        <ChiTiet props={page.props}/>
      </Layout1>
    );
  };
  export async function getServerSideProps() {
    // Fetch data from external API
    const { data } = await fetchData.get("/giaydep/lay-1");
    // Pass data to the page via props
    return { props: { motMondo: data } };
  }