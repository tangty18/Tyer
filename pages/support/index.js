import { useState } from "react";
export default function HoTro(){
const [thongTin, setThongTin] = useState("Đây")
    return(
        <div>Thông Tin:{thongTin}</div>
    )
}
