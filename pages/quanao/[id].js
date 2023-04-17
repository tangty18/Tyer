import { Layout1 } from "../../components/layout/layout1";
import { useState } from "react";
import { Item } from "../../components/item/quanao/item-xem-chi-tiet";
import { fetchData } from "../../tools/axios";
export default function ChiTiet({props}) {
  const [sanPham, setSanPham] = useState(props.motBoDo)
    return <div>
         <div>
      {sanPham.map((item) => (
        <Item
          id={item.id}
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
        <ChiTiet props={page.props} />
      </Layout1>
    );
  };
  export async function getServerSideProps(context) {
    // Fetch data from external API
    const { data } = await fetchData.post("/quanao/lay-1",{
      id: context.query.id,
    });
    // Pass data to the page via props
    return { props: { motBoDo:data } };
  }