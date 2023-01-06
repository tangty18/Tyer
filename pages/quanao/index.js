import { useState } from "react";
export default function QuanAo() {
    const[danhSachSP, setDanhSachSP] = useState([
        {
            name: "Áo Sơ Mi",
            soLuong: 23000,
            image:
                "https://cdn2.yame.vn/pimg/so-mi-nam-no-style-td-km18-0018246/31aadf2f-485f-0200-f8e0-001823d06909.jpg?w=540&h=756"
        },
        {
            name: "Áo Khoác",
            soLuong: 15000,
            image:
                "https://bizweb.dktcdn.net/thumb/1024x1024/100/415/697/products/m0w2iuvv-1-1hxj-hinh-mat-truoc-01-773b266a-c405-45d5-b508-87327f1f0062.jpg"
        },
        {
            name: "Áo hoodie",
            soLuong: 50000,
            image:
                "https://cf.shopee.vn/file/e9a1464780d98ef4ef9b9c32ce8e02b8"
        },
        {
            name: "Áo Ba lỗ",
            price: 50000,
            image:
                "https://linhvnxk.com/wp-content/uploads/2020/06/ao-ba-lo-trang-xuat-khau-4.jpg"
        },
        {
            name: "Áo thun",
            soLuong: 6000,
            image:
                "https://product.hstatic.net/1000357687/product/1_6f661df1e8b44c58bf89a7961b42d184_master.jpg"
        }
    ])
    const [ketQuaTimKiem,setKetquaTimKiem]=useState([])
    const [input, setInput] = useState("")

  function inputValue(event) {
        setInput(event.target.value)
    }


    function timKiem(){
        const result = danhSachSP.filter((item)=>item.name== input)
        setKetquaTimKiem(result)
    }

    return (
        <div>
            {danhSachSP.map((item) => (
                    <div>
                        <div>Tên:{item.name}</div>
                        <div>Giá:{item.price}</div>
                        <div>
                            <img src={item.image} width={"100px"} height={"100px"} />
                        </div>
                    </div>
                ))}
                <hr/>
                <input onChange={inputValue}></input>
            <button onClick={timKiem}>Tìm Kiếm</button>    
           <div>
                    {ketQuaTimKiem.map((item)=>(
                        <div>
                             <div>Tên:{item.name}</div>
                             <div>Giá:{item.price}</div>
                             <div>
                                <img src={item.image} witdth={100}  height={100}/>
                             </div>
                         </div>
                        
                    ))}
            </div>
        </div>
        
   
     
 )


}