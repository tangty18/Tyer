import { useState } from "react";
import styles from "./dssp.module.css";
import { Item } from "../../components/item/giohang/item";
export default function DSSP() {  const [danhSachSP, setDanhSachSP] = useState([
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
      <div className={styles.container}>
        {danhSachSP.map((item) => (
          <Item ten={item.name} gia={item.soLuong} image={item.image} />
        ))}
        </div>
      <hr />
      <input onChange={inputValue}></input>
      <button onClick={timKiem}>Tìm Kiếm</button>
      <div>
        {ketQuaTimKiem.map((item) => (
          <div>
            <div>Tên:{item.name}</div>
            <div>Số Lượng:{item.soLuong}</div>
            <div>
              <img src={item.image} witdth={100} height={100} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
