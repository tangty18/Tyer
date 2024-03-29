import { useEffect, useState } from "react";
import styles from "./sanpham.module.css";
import { Layout1 } from "../../components/layout/layout1";
import { Item } from "../../components/item/item";
import { fetchData } from "../../tools/axios";

export default function TestHome({ props }) {
  const [danhSachSP, setDanhSachSP] = useState(props.danhSachBut);
  const [ketQuaTimKiem, setKetquaTimKiem] = useState([]);
  const [input, setInput] = useState("");
  const [hienDSSP, setHienDSSP] = useState(true);

  useEffect(()=>{
    setDanhSachSP(props.danhSachBut)
  },[props.danhSachBut])

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
      {!hienDSSP && (
        <div className={styles.ket_qua_tim_kiem}>
          {ketQuaTimKiem.map((item) => (
            <div className={styles.item_tim_kiem}>
              <div>Tên:{item.name}</div>
              <div>Số Lượng:{item.soLuong}</div>
              <div>
                <img src={item.image} witdth={100} height={100} />
              </div>
            </div>
          ))}
        </div>
      )}
      <hr />

      {hienDSSP && (
        <div className={styles.container}>
          {danhSachSP.map((item) => (
            <Item
              id={item.masp}
              ten={item.ten}
              soluong={item.soluong}
              image={item.hinhanh}
              gia={item.gia}
              khoiLuong={0}
            />
          ))}
        </div>
      )}
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

export async function getServerSideProps(context) {
  const type = context.query.type;
  // Fetch data from external API

  const { data } = await fetchData.post("/sanpham/get-all", { theloai: type });
  // Pass data to the page via props


  return { props: { danhSachBut: data } };
}
