import { NEXT_BUILTIN_DOCUMENT } from "next/dist/shared/lib/constants";
import { useState, useTransition } from "react";
export default function TestHome() {
    const [conSo, setConSo] = useState(10)
    const [tenNguoiLam, setTenNguoiLam] = useState("Hoàng Tý")
    const [input, setInput] = useState("")
    const [danhSachSP, setDanhSachSP] = useState([
        {
            name: "Bút Chì",
            price: 23000,
            image: 
            "http://img.websosanh.vn/v2/users/root_product/images/but-chi-go-2b-thien-long-gp02/2jgr174h4dbhl.jpg"
        },
        {
            name: "Bút Lông",
            price: 15000,
            image: 
            "https://product.hstatic.net/1000230347/product/but_long_dau_thien_long_pm-09__1_.jpg"
        },
        {
            name: "Bút Màu",
            price: 50000,
            image: 
            "https://phucma.com.vn/wp-content/uploads/2019/06/but-mau-noi-Artline-Pastel-ink-min.jpg"
        },
        {
            name: "Bút Bi",
            price: 50000,
            image: 
            "https://adcbook.net.vn/web/image/product.template/74838/image_1024?unique=2c1660d"
        },
        {
            name: "Cọ Vẽ",
            price: 6000,
            image: 
            "https://mokostory.files.wordpress.com/2017/07/brushtypes.jpg?w=614"
        }
    ])
    function tangSo() {
        setConSo(conSo + 1)
    }

    function giamSo() {
        setConSo(conSo - 1)
    }

    function inputValue(event) {
        setInput(event.target.value)
    }

    function thayDoi() {
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


            <div>
                {danhSachSP.map((item) => (
                    <div>
                        <div>Tên:{item.name}</div>
                        <div>Giá:{item.price}</div>
                        <div>
                            <img scr={item.image} width={"100px"} height={"100px"} />
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )

}

