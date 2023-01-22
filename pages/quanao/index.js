import { useState } from "react";
import styles from "./quanao.module.css";
import { Layout1 } from "../../components/layout/layout1";
import { Item } from "../../components/item/quanao/item";
import { fetchData } from "../../tools/axios";
export default function QuanAo({props}) {
  const [danhSachSP, setDanhSachSP] = useState(props.danhSachQuanAo);
  const [ketQuaTimKiem, setKetquaTimKiem] = useState([]);
  const [input, setInput] = useState("");

  function inputValue(event) {
    setInput(event.target.value);
  }

  function timKiem() {
    const result = danhSachSP.filter((item) => {
      return coTrongChuoiKhong(item.name, "");
    });
    setKetquaTimKiem(result);
  }
  function coTrongChuoiKhong(chuoi, tuKhoa) {
    let chuoiMoi = chuoi.toLowerCase();
    let tuKhoaMoi = tuKhoa.toLowerCase();

    return chuoiMoi.includes(tuKhoaMoi);
  }

  return (
    <div>
    <input onChange={inputValue}></input>
    <button onClick={timKiem}>Tìm Kiếm</button>
    <div>
      {ketQuaTimKiem.map((item) => (
        <div>
          <div>Tên:{item.name}</div>
          <div>Giá:{item.price}</div>
          <div></div>
          <div>
            <img src={item.image} witdth={100} height={100} />
          </div>
        </div>
      ))}
    </div>
    <hr />
    <div className={styles.container}>
      {danhSachSP.map((item) => (
        <Item
          ten={item.name}
          gia={item.soLuong}
          image={item.image}
          size={item.size}
          mauSac={item.mauSac}
        />
      ))}
    </div>
  </div>
);
}

QuanAo.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <QuanAo props={page.props} />
    </Layout1>
  );
};
export async function getServerSideProps() {
  // Fetch data from external API
  const { data } = await fetchData.get("/quanao/lay-toan-bo");
  // Pass data to the page via props
  return { props: { danhSachQuanAo: data } };
}
