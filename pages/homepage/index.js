import { useState } from "react";

export default function Home() {

    const [number, setNumBer] = useState(10)

    function tangSo() {
        setNumBer(number + 1)
    }
    function giamSo() {
        setNumBer(number - 1)
    }




    return (
        <div >
            Con Số gì đây: {number}
            <br />
            <button onClick={tangSo}>tăng</button>
            <br />
            <button onClick={giamSo}>giảm</button>

            
        </div>
    )
}
