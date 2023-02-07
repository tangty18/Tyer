import { useState } from "react";
import styles from "./dienthoai.module.css";
import { Layout1 } from "../../components/layout/layout1";
import { Item } from "../../components/item/dienthoai/item";
import { fetchData } from "../../tools/axios";
export default function DienThoai({ props }) {
  const [danhSachSP, setDanhSachSP] = useState(props.danhSachDienThoai);
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
            hang={item.hang}
            tocDo={item.tocDo}
            gioiTinh={item.gioiTinh}
          />
        ))}
      </div>
    </div>
  );
}

DienThoai.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <DienThoai props={page.props} />
    </Layout1>
  );
};
export async function getServerSideProps() {
  // Fetch data from external API
  const { data } = await fetchData.get("/dienthoai/lay-toan-bo");
  // Pass data to the page via props
  return { props: { danhSachDienThoai: data } };
}
