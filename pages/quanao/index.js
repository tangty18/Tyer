import { useState } from "react";
import styles from "./quanao.module.css";
import { Layout1 } from "../../components/layout/layout1";
import { Item } from "../../components/item/quanao/item";
import { fetchData } from "../../tools/axios";
export default function QuanAo({ props }) {
  const [danhSachSP, setDanhSachSP] = useState(props.danhSachQuanAo);
  const [ketQuaTimKiem, setKetquaTimKiem] = useState([]);
  const [input, setInput] = useState("");
  const [hienDSSP, setHienDSSP] = useState(true);

  function inputValue(event) {
    setInput(event.target.value);
  }

  function timKiem() {
    const dssp = timSanPhamTheoTuKhoa(danhSachSP, input);
    setKetquaTimKiem(dssp);
    setHienDSSP(false);
  }
  function coTrongChuoiKhong(chuoi, tuKhoa) {
    let chuoiMoi = chuoi.toLowerCase();
    let tuKhoaMoi = tuKhoa.toLowerCase();

    return chuoiMoi.includes(tuKhoaMoi);
  }

  function timSanPhamTheoTuKhoa(danhSachSanPham, tuKhoa) {
    let ketQua = danhSachSanPham.filter((sanPham) => {
      return coTrongChuoiKhong(sanPham.name, tuKhoa);
    });
    return ketQua;
  }

  return (
    <div>
      <input onChange={inputValue}></input>
      <button onClick={timKiem}>Tìm Kiếm</button>
     {!hienDSSP&& <div className={styles.ket_qua_tim_kiem}>
        {ketQuaTimKiem.map((item) => (
          <div className={styles.item_tim_kiem}>
            <div>Tên:{item.name}</div>
            <div>Giá:{item.soLuong}</div>
            <div></div>
            <div>
              <img src={item.image} witdth={100} height={100} />
            </div>
          </div>
        ))}
      </div>}
      <hr />
     {hienDSSP&& <div className={styles.container}>
        {danhSachSP.map((item) => (
          <Item
            ten={item.name}
            gia={item.soLuong}
            image={item.image}
            size={item.size}
            mauSac={item.mauSac}
          />
        ))}
      </div>}
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
