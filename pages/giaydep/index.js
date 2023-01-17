import { useState } from "react";
import styles from "./giaydep.module.css";
import { Layout1 } from "../../components/layout/layout1";
import { Item } from "../../components/item/giaydep/item";
export default function GiayDep() {
  const [danhSachSP, setDanhSachSP] = useState([
    {
      name: "Giày",
      soLuong: 23000,
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/71/e4/14/32f261b65904ad2ea0339bac05aca6a4.jpg",
    },
    {
      name: "Dép Lê",
      soLuong: 15000,
      doben:"chó cắn không đứt",
      phongThu:5000,
      mauSac:"xanh",
      image:
        "https://media3.scdn.vn/img3/2019/5_7/mxelbs_simg_de2fe0_500x500_maxb.jpg",
    },
    {
      name: "Dép Tổ Ong",
      soLuong: 50000,
      doben:"chó cắn không đứt",
      phongThu:5000,
      mauSac:"xanh",
      image:
        "https://product.hstatic.net/200000427375/product/12_d9b772845de347b5882b57a0fe2f266b.png",
    },
    {
      name: "Dép lào",
      soLuong: 50000,
      doben:"chó cắn không đứt",
      phongThu:5000,
      mauSac:"xanh",
      image: "https://cf.shopee.vn/file/4e0ee426458299c169ba0908fb4b9b9f",
    },
    {
      name: "Dép",
      soLuong: 6000,
      doben:"chó cắn không đứt",
      phongThu:5000,
      mauSac:"xanh",
      image: "https://cf.shopee.vn/file/582170e1c0ba7c882fc20048cc32f549",
    },
    {
      name: "Giày",
      soLuong: 23000,
      doben:"chó cắn không đứt",
      phongThu:5000,
      mauSac:"xanh",
      image:
        "https://salt.tikicdn.com/cache/w1200/ts/product/71/e4/14/32f261b65904ad2ea0339bac05aca6a4.jpg",
    },
    {
      name: "Dép Lê",
      soLuong: 15000,
      doben:"chó cắn không đứt",
      phongThu:5000,
      mauSac:"xanh",
      image:
        "https://media3.scdn.vn/img3/2019/5_7/mxelbs_simg_de2fe0_500x500_maxb.jpg",
    },
    {
      name: "Dép Tổ Ong",
      soLuong: 50000,
      doben:"chó cắn không đứt",
      phongThu:5000,
      mauSac:"xanh",
      image:
        "https://product.hstatic.net/200000427375/product/12_d9b772845de347b5882b57a0fe2f266b.png",
    },
    {
      name: "Dép lào",
      soLuong: 50000,
      doben:"chó cắn không đứt",
      phongThu:5000,
      mauSac:"xanh",
      image: "https://cf.shopee.vn/file/4e0ee426458299c169ba0908fb4b9b9f",
    },
    {
      name: "Dép",
      soLuong: 6000,
      doben:"chó cắn không đứt",
      phongThu:5000,
      mauSac:"xanh",
      image: "https://cf.shopee.vn/file/582170e1c0ba7c882fc20048cc32f549",
    },
  ]);

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
            doBen={item.doBen}
            mauSac={item.mauSac}
            phongThu={item.phongThu}
          />
        ))}
      </div>
    </div>
  );
}
GiayDep.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <GiayDep />
    </Layout1>
  );
};
