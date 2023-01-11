import { useState } from "react";
import { Layout1 } from "../../components/layout/layout1";
export default function Lienhe(){
const [thongTinLienHe, setThongTinLienHe] = useState("tangty18@gmail.com")
    return(
        <div>Thông Tin Liên Hệ:{thongTinLienHe}</div>
    )
}
Lienhe.getLayout = function getLayout(page) {
    return (
      <Layout1>
        <Lienhe />
      </Layout1>
    );
  };