import { useState } from "react";
import { Layout3 } from "../../components/layout/layout3";
export default function DatHang(){

    return(
        <div>
          <form >
        <label for="fname">Tên Sản Phẩm</label>
        <br></br>
        <input
          type="text"
          id="fname"
          name="tenSanPham"
          placeholder="Tên Sản Phẩm..."
     

        ></input>
     
        
        <br />
        <label for="fname">Image</label>
        <br />
        <input
          type="text"
          id="lname"
          name="image"
          placeholder="Hình Ảnh..."
    
        ></input>
        <br />
        <label for="fname">Số Lượng</label>
        <br />
        <input
          type="number"
          id="lname"
          name="number"
          placeholder="Số Lượng..."
        
        ></input>
        <br/>

        <input type="submit" value="Dat Hang"></input>
      </form>
        </div>
    )
}
DatHang.getLayout = function getLayout(page) {
    return (
      <Layout3>
        <DatHang />
      </Layout3>
    );
  };