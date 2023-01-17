import { useState } from "react";
import styles from "./dienthoai.module.css";
import { Layout1 } from "../../components/layout/layout1";
import { Item } from "../../components/item/dienthoai/item";
export default function DienThoai() {
  const [danhSachSP, setDanhSachSP] = useState([
    {
      name: "Điện Thoại Bàn",
      soLuong: 23000,
      hang: "Soni",
      gioiTinh: "nam",
      tocDo: 150,
      khoiLuong: 13,
      image:
        "https://cdn01.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_344/dien-thoai-ban-panascl_450.png.webp",
    },
    {
      name: "Oppo a5",
      soLuong: 15000,
      hang: "Soni",
      gioiTinh: "nam",
      tocDo: 150,
      khoiLuong: 13,
      image:
        "https://cdn01.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_31672/oppo-a17-4gb-64_main_819_450.png.webp",
    },
    {
      name: "ROG",
      soLuong: 50000,
      hang: "Soni",
      gioiTinh: "nam",
      tocDo: 150,
      khoiLuong: 13,
      image: "https://cf.shopee.vn/file/1ed4ae9de8b9a1e664272319d8d22377",
    },
    {
      name: "SamSung",
      soLuong: 50000,
      hang: "Soni",
      gioiTinh: "nam",
      tocDo: 150,
      khoiLuong: 13,
      image:
        "https://images.samsung.com/is/image/samsung/assets/vn/2208/pcd/smartphones/PCD_B_KV_Merchandising_192x192_mo.png?$192_192_PNG$",
    },
    {
      name: "iphone",
      soLuong: 6000,
      hang: "Soni",
      gioiTinh: "nam",
      tocDo: 150,
      khoiLuong: 13,
      image:
        "https://www.apple.com/v/iphone-14-pro/c/images/meta/iphone-14-pro_overview__e414c54gtu6a_og.png?202212152253",
    },
    {
      name: "Điện Thoại Bàn",
      soLuong: 23000,
      hang: "Soni",
      gioiTinh: "nam",
      tocDo: 150,
      khoiLuong: 13,
      image:
        "https://cdn01.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_344/dien-thoai-ban-panascl_450.png.webp",
    },
    {
      name: "Oppo a5",
      soLuong: 15000,
      hang: "Soni",
      gioiTinh: "nam",
      tocDo: 150,
      khoiLuong: 13,
      image:
        "https://cdn01.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_31672/oppo-a17-4gb-64_main_819_450.png.webp",
    },
    {
      name: "ROG",
      soLuong: 50000,
      hang: "Soni",
      gioiTinh: "nam",
      tocDo: 150,
      khoiLuong: 13,
      image: "https://cf.shopee.vn/file/1ed4ae9de8b9a1e664272319d8d22377",
    },
    {
      name: "SamSung",
      price: 50000,
      hang: "Soni",
      gioiTinh: "nam",
      tocDo: 150,
      khoiLuong: 13,
      image:
        "https://images.samsung.com/is/image/samsung/assets/vn/2208/pcd/smartphones/PCD_B_KV_Merchandising_192x192_mo.png?$192_192_PNG$",
    },
    {
      name: "iphone",
      soLuong: 6000,
      hang: "Soni",
      gioiTinh: "nam",
      tocDo: 150,
      image:
        "https://www.apple.com/v/iphone-14-pro/c/images/meta/iphone-14-pro_overview__e414c54gtu6a_og.png?202212152253",
    },
  ]);
  const [ketQuaTimKiem, setKetquaTimKiem] = useState([]);
  const [input, setInput] = useState("");

  function coTrongChuoiKhong(chuoi, tuKhoa) {
    let chuoiMoi = chuoi.toLowerCase();
    let tuKhoaMoi = tuKhoa.toLowerCase();

    return chuoiMoi.includes(tuKhoaMoi);
  }
  function inputValue(event) {
    setInput(event.target.value);
  }

  function timKiem() {
    const result = danhSachSP.filter((item) => {
      return coTrongChuoiKhong(item.name, "");
    });
    setKetquaTimKiem(result);
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
};

DienThoai.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <DienThoai />
    </Layout1>
  );
};
