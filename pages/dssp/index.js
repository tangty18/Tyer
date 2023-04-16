import { useState,useEffect } from "react";
import styles from "./dssp.module.css";
import { Item } from "../../components/item/dssp/item";
import { Layout1 } from "../../components/layout/layout1";
import { fetchDataClientSite } from "../../tools/axios";

export default function DSSP() {
const [danhSachSP, setDanhSachSP] = useState([]);
const [tabIndex, setTabIndex] = useState(0);
const [ketQuaTimKiem, setKetquaTimKiem] = useState([]);

useEffect(() => {
  async function firstReload() {
    await nhanVaoTab(0)

  }

  firstReload()
}, []);

async function nhanVaoTab(index) {
  setTabIndex(index);
if (index==0){
  const { data } = await fetchDataClientSite.get("api/yeu-thich/but");
  setDanhSachSP(data)
}
else if (index==1){
  const { data } = await fetchDataClientSite.get("api/yeu-thich/do-gia-dung");
  setDanhSachSP(data)
}
else if (index==2){
  const { data } = await fetchDataClientSite.get("api/yeu-thich/dien-thoai");
  setDanhSachSP(data)
}
else if (index==3){
  const { data } = await fetchDataClientSite.get("api/yeu-thich/may-ting");
  setDanhSachSP(data)
}
else if (index==4){
  const { data } = await fetchDataClientSite.get("api/yeu-thich/quan-ao");
  setDanhSachSP(data)
}
else if (index==5){
  const { data } = await fetchDataClientSite.get("api/yeu-thich/giay-dep");
  setDanhSachSP(data)
}
}

return (
  <div>
    <div className={styles.button}>
      <button
        className={
          tabIndex == 0
            ? styles.tab_button_passive + " " + styles.tab_button_active
            : styles.tab_button_passive
        }
        onClick={() => nhanVaoTab(0)}
      >
        Bút
      </button>
      <button
        className={
          tabIndex == 1
            ? styles.tab_button_passive + " " + styles.tab_button_active
            : styles.tab_button_passive
        }
        onClick={() => nhanVaoTab(1)}
      >
        Đồ Gia Dụng
      </button>
      <button 
        className={
          tabIndex == 2
            ? styles.tab_button_passive + " " + styles.tab_button_active
            : styles.tab_button_passive
        }
        onClick={() => nhanVaoTab(2)}
      >
        Điện Thoại
      </button>
      <button
        className={
          tabIndex == 3
            ? styles.tab_button_passive + " " + styles.tab_button_active
            : styles.tab_button_passive
        }
        onClick={() => nhanVaoTab(3)}
      >
        Máy Tính
      </button>
      <button
        className={
          tabIndex == 4
            ? styles.tab_button_passive + " " + styles.tab_button_active
            : styles.tab_button_passive
        }
        onClick={() => nhanVaoTab(4)}
      >
        Quần Áo
      </button>
      <button
        className={
          tabIndex == 5
            ? styles.tab_button_passive + " " + styles.tab_button_active
            : styles.tab_button_passive
        }
        onClick={() => nhanVaoTab(5)}
      >
        Giày Dép
      </button>
    </div>
    <div className={styles.container}>
      {danhSachSP.map((item) => (
        <Item ten={item.name} gia={item.soLuong} image={item.image} />
      ))}
    </div>
  </div>
);
 }


DSSP.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <DSSP  />
    </Layout1>
  );
}
