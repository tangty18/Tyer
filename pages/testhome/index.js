import { NEXT_BUILTIN_DOCUMENT } from "next/dist/shared/lib/constants";
import { useState, useTransition } from "react";
export default function TestHome() {
    const [conSo, setConSo] = useState(10)
    const [tenNguoiLam, setTenNguoiLam] = useState("Hoàng Tý")
    const [input, setInput] = useState("")
    function tangSo() {
        setConSo(conSo + 1)
    }

    function giamSo() {
        setConSo(conSo - 1)
    }

    function inputValue(event) {
        setInput(event.target.value)
    }

    function thayDoi(){
        setTenNguoiLam(input)
    }

    return (
        <div>
            Con Số Gì Đây:{conSo}
            <br />
            <button onClick={tangSo}>Tăng</button>
            <br />
            <button onClick={giamSo}>Giảm</button>
            <br />
            <input onChange={inputValue}></input>
            <button onClick={thayDoi}>Thay Đổi</button>
            <br />
            Tên Người Làm:{tenNguoiLam}

        </div>

    )

}


