import { Layout3 } from "../../components/layout/layout3";
import { useState } from "react";
export default function ThemSP() {
  const [tenSanPham, setTenSanPham] = useState("");
  const [giaSanPham, setGiaSanPham] = useState("");
  const [image, setImage] = useState("");

function onChangeImage(){
  setImage(event.target.value)
}


  function onChangeTenSanPham(event) {
    setTenSanPham(event.target.value);
  }

  function onChangeGiaSanPham(event) {
    setGiaSanPham(event.target.value);
  }
  async function onLogin(event) {
    event.preventDefault();

    const data = {
      tenSanPham: tenSanPham,
      giaSanPham: giaSanPham,
      image:image,
    };

console.log({data})
  }

  return (
    <div>
      <form onSubmit={onLogin}>
        <label for="fname">Tên Sản Phẩm</label>
        <br></br>
        <input
          type="text"
          id="fname"
          name="tenSanPham"
          placeholder="Tên Sản Phẩm..."
          onChange={onChangeTenSanPham}

        ></input>
        <br></br>
        <label for="lname">Giá Sản Phẩm</label>
        <br></br>
        <input
          type="number"
          id="lname"
          name="giaSanPham"
          placeholder="Nhập Giá..."
          onChange={onChangeGiaSanPham}
        ></input>
        <br />
        <label for="fname">The Loai</label>
        <br/>
        <select id="country" name="country">
          <option value="">--Hãy Chọn Một Thể Loại--</option>
          <option onChange={onChangeGiaSanPham} value="but">bút</option>
          <option value="dienthoai">điện thoại</option>
          <option value="mayting">máy tính</option>
          <option value="dogiadung">Đồ Gia Dụng</option>
          <option value="quanao">quần áo</option>
          <option value="giaydep">giày dép</option>
        </select>
        <br />
        <label for="fname">Image</label>
        <br />
        <input
          type="text"
          id="lname"
          name="image"
          placeholder="Hình Ảnh..."
          onChange={onChangeImage}
        ></input>

        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

ThemSP.getLayout = function getLayout(page) {
  return (
    <Layout3>
      <ThemSP />
    </Layout3>
  );
};
