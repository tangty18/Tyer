import { useState } from "react";
export default function Lienhe(){
const [thongTinLienHe, setThongTinLienHe] = useState("tangty18@gmail.com")
    return(
        <div>Thông Tin Liên Hệ:{thongTinLienHe}</div>
    )
}