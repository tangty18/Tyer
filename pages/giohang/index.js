import { use, useState } from "react";
import styles from "./giohang.module.css";
import { Item } from "../../components/item/giohang/item";
import { Layout1 } from "../../components/layout/layout1";
import { fetchDataClientSite } from "../../tools/axios";
export default function GioHang() {
  const [danhSachSP, setDanhSachSP] = useState([
    {
      name: "Lenovo",
      soLuong: 23000,
      image:
        "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(5):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/22/637994515053119389_lenovo-ideapad-5-pro-16iah7-xam-1.jpg",
    },
    {
      name: "SamSung",
      soLuong: 15000,
      image:
        "https://cdn.tgdd.vn/Files/2021/05/22/1353676/tren-tay-samsung-galaxy-book-pro8_800x450.png",
    },
    {
      name: "LG",
      soLuong: 50000,
      image:
        "https://www.lg.com/vn/images/laptops/md07555429/gallery/medium05.jpg",
    },
    {
      name: "ThinkPad",
      soLuong: 50000,
      image:
        "https://cdn.tgdd.vn/hoi-dap/1377460/co-nen-mua-laptop-lenovo-thinkpad-top-5-mau-laptop-tot%20(3).jpg",
    },
    {
      name: "ROG",
      soLuong: 6000,
      image:
        "https://fptshop.com.vn/Uploads/Originals/2022/9/30/638001227463678942_asus-gaming-zephyrus-g513-xam-led-4zone-dd.jpg",
    },
    {
      name: "Lenovo",
      soLuong: 23000,
      image:
        "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(5):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/22/637994515053119389_lenovo-ideapad-5-pro-16iah7-xam-1.jpg",
    },
    {
      name: "SamSung",
      soLuong: 15000,
      image:
        "https://cdn.tgdd.vn/Files/2021/05/22/1353676/tren-tay-samsung-galaxy-book-pro8_800x450.png",
    },
    {
      name: "LG",
      soLuong: 50000,
      image:
        "https://www.lg.com/vn/images/laptops/md07555429/gallery/medium05.jpg",
    },
    {
      name: "ThinkPad",
      soLuong: 50000,
      image:
        "https://cdn.tgdd.vn/hoi-dap/1377460/co-nen-mua-laptop-lenovo-thinkpad-top-5-mau-laptop-tot%20(3).jpg",
    },
    {
      name: "ROG",
      soLuong: 6000,
      image:
        "https://fptshop.com.vn/Uploads/Originals/2022/9/30/638001227463678942_asus-gaming-zephyrus-g513-xam-led-4zone-dd.jpg",
    },
  ]);
  const [tabIndex, setTabIndex] = useState(0);
  const [ketQuaTimKiem, setKetquaTimKiem] = useState([]);

  async function nhanVaoTab(index) {
    setTabIndex(index);
if (index==0){
    const { data } = await fetchDataClientSite.get("api/gio-hang/but");
    setDanhSachSP(data)
}
else if (index==1){
    const { data } = await fetchDataClientSite.get("api/gio-hang/do-gia-dung");
    setDanhSachSP(data)
}
else if (index==2){
    const { data } = await fetchDataClientSite.get("api/gio-hang/dien-thoai");
    setDanhSachSP(data)
}
else if (index==3){
    const { data } = await fetchDataClientSite.get("api/gio-hang/may-ting");
    setDanhSachSP(data)
}
else if (index==4){
    const { data } = await fetchDataClientSite.get("api/gio-hang/quan-ao");
    setDanhSachSP(data)
}
else if (index==5){
    const { data } = await fetchDataClientSite.get("api/gio-hang/giay-dep");
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

GioHang.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <GioHang />
    </Layout1>
  );
};
