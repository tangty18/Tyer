import { useState } from "react";
import styles from "./but.module.css";
import { Layout1 } from "../../components/layout/layout1";
import { Item } from "../../components/item/but/item";
import { fetchData } from "../../tools/axios";

export default function TestHome({ props }) {
  const [danhSachSP, setDanhSachSP] = useState(props.danhSachBut);

  const [ketQuaTimKiem, setKetquaTimKiem] = useState([]);
  const [input, setInput] = useState("");

  function inputValue(event) {
    setInput(event.target.value);
  }

  function timKiem() {
    const dssp = timSanPhamTheoTuKhoa(danhSachSP,input)
    setKetquaTimKiem(dssp)
  }
  function coTrongChuoiKhong(chuoi, tuKhoa) {
    let chuoiMoi = chuoi.toLowerCase();
    let tuKhoaMoi = tuKhoa.toLowerCase();

    return chuoiMoi.includes(tuKhoaMoi);
  }

  function timSanPhamTheoTuKhoa(danhSachSanPham, tuKhoa) {
    let ketQua = danhSachSanPham.filter((sanPham) => {
      return coTrongChuoiKhong(sanPham.name, tuKhoa)
    })
    return ketQua
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
            khoiLuong={item.khoiLuong}
          />
        ))}
      </div>
    </div>
  );
}

TestHome.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <TestHome props={page.props} />
    </Layout1>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const { data } = await fetchData.get("/but/lay-toan-bo");
  // Pass data to the page via props
  return { props: { danhSachBut: data } };
}
