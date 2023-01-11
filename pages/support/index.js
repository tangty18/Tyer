import { useState } from "react";
import { Layout1 } from "../../components/layout/layout1";
export default function HoTro(){
const [thongTin, setThongTin] = useState("Đây")
    return(
        <div>Thông Tin:{thongTin}</div>
    )
}
HoTro.getLayout = function getLayout(page) {
    return (
      <Layout1>
        <HoTro />
      </Layout1>
    );
  };