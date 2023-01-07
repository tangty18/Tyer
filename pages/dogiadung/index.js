import { useState } from "react";
export default function DoGiaDung() {
  const [danhSachSP, setDanhSachSP] = useState([
    {
      name: "Tủ Lạnh",
      soLuong: 23000,
      image:
        "https://cdn.tgdd.vn/Products/Images/1943/262446/lg-inverter-335-lit-gn-m332bl-1.-600x600.jpg",
    },
    {
      name: "Máy Giặt",
      soLuong: 15000,
      image:
        "https://hangdienmaygiare.com/images/products/2019/09/03/large/may-giat-electrolux-ewf1042bdwa-10-kg-inverter.jpg",
    },
    {
      name: "Bàn ủi",
      soLuong: 50000,
      image: "https://alaska.vn/wp-content/uploads/2022/06/bl-1000-1-w.jpeg",
    },
    {
      name: "Ấm Đun",
      soLuong: 50000,
      image:
        "https://kingshop.vn/data/products/500/am-dun-nuoc-sieu-toc-nagakawa-nag0307-1.jpg",
    },
    {
      name: "Bếp Điện Tử",
      soLuong: 6000,
      image: "https://cdn.tgdd.vn/ValueIcons/bep-tu-doi.png",
    },
  ]);

  const [ketQuaTimKiem, setKetquaTimKiem] = useState([]);
  const [input, setInput] = useState("");

  function inputValue(event) {
    setInput(event.target.value);
  }

  function timKiem() {
    const result = danhSachSP.filter((item) => item.name == input);
    setKetquaTimKiem(result);
  }

  return (
    <div>
      {danhSachSP.map((item) => (
        <div>
          <div>Tên:{item.name}</div>
          <div>Số Lượng:{item.soLuong}</div>
          <div>
            <img src={item.image} width={"100px"} height={"100px"} />
          </div>
        </div>
      ))}
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
