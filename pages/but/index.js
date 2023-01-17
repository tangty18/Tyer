import { useState } from "react";
import styles from "./but.module.css";
import { Layout1 } from "../../components/layout/layout1";
import { Item } from "../../components/item/but/item";
export default function TestHome() {
  const [danhSachSP, setDanhSachSP] = useState([
    {
      name: "Bút Chì",
      soLuong: 23000,
      khoiLuong: 13,
      image:
        "http://img.websosanh.vn/v2/users/root_product/images/but-chi-go-2b-thien-long-gp02/2jgr174h4dbhl.jpg",
    },
    {
      name: "Bút Lông",
      soLuong: 15000,
      khoiLuong: 13,
      image:
        "https://product.hstatic.net/1000230347/product/but_long_dau_thien_long_pm-09__1_.jpg",
    },
    {
      name: "Bút Màu",
      soLuong: 50000,
      khoiLuong: 13,
      image:
        "https://phucma.com.vn/wp-content/uploads/2019/06/but-mau-noi-Artline-Pastel-ink-min.jpg",
    },
    {
      name: "Bút Bi",
      soLuong: 50000,
      khoiLuong: 13,
      image:
        "https://adcbook.net.vn/web/image/product.template/74838/image_1024?unique=2c1660d",
    },
    {
      name: "Cọ Vẽ",
      soLuong: 6000,
      khoiLuong: 13,
      image:
        "https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/296099477_101442889337580_4175294896963945968_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ghIAAjqj_d8AX_LpKt3&tn=LXo4bNndAb8GCCKs&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfAEktBHSMmK2WN-6wD-AF7sbaRx4qsBzKSOf90txWIh5w&oe=63AD3375",
    },
    {
      name: "Bút Chì",
      soLuong: 23000,
      image:
        "http://img.websosanh.vn/v2/users/root_product/images/but-chi-go-2b-thien-long-gp02/2jgr174h4dbhl.jpg",
    },
    {
      name: "Bút Lông",
      soLuong: 15000,
      khoiLuong: 13,
      image:
        "https://product.hstatic.net/1000230347/product/but_long_dau_thien_long_pm-09__1_.jpg",
    },
    {
      name: "Bút Màu",
      soLuong: 50000,
      khoiLuong: 13,
      image:
        "https://phucma.com.vn/wp-content/uploads/2019/06/but-mau-noi-Artline-Pastel-ink-min.jpg",
    },
    {
      name: "Bút Bi",
      soLuong: 50000,
      khoiLuong: 13,
      image:
        "https://adcbook.net.vn/web/image/product.template/74838/image_1024?unique=2c1660d",
    },
    {
      name: "Cọ Vẽ",
      soLuong: 6000,
      khoiLuong: 13,
      image:
        "https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/296099477_101442889337580_4175294896963945968_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ghIAAjqj_d8AX_LpKt3&tn=LXo4bNndAb8GCCKs&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfAEktBHSMmK2WN-6wD-AF7sbaRx4qsBzKSOf90txWIh5w&oe=63AD3375",
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
          />
        ))}
      </div>
    </div>
  );
}

TestHome.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <TestHome />
    </Layout1>
  );
};
