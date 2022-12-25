import { NEXT_BUILTIN_DOCUMENT } from "next/dist/shared/lib/constants";
import { useState, useTransition } from "react";
export default function TestHome() {
    const [conSo, setConSo] = useState(10)

    function tangSo() {
        setConSo(conSo + 1)
    }

    function giamSo() {
        setConSo(conSo - 1)
    }



    return (
        <div>
            Con Số Gì Đây:{conSo}
            <br />
            <button onClick={tangSo}>Tăng</button>
            <br />
            <button onClick={giamSo}>Giảm</button>
        </div>
    )

}


