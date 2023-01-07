import { useState } from "react";
export default function DoGiaDung() {
    const[danhSachSP, setDanhSachSP] = useState([
        {
            name: "Giày",
            soLuong: 23000,
            image:
                "https://salt.tikicdn.com/cache/w1200/ts/product/71/e4/14/32f261b65904ad2ea0339bac05aca6a4.jpg"
        },
        {
            name: "Dép Lê",
            soLuong: 15000,
            image:
                "https://media3.scdn.vn/img3/2019/5_7/mxelbs_simg_de2fe0_500x500_maxb.jpg"
        },
        {
            name: "Dép Tổ Ong",
            soLuong: 50000,
            image:
                "https://product.hstatic.net/200000427375/product/12_d9b772845de347b5882b57a0fe2f266b.png"
        },
        {
            name: "Dép lào",
            soLuong: 50000,
            image:
                "https://cf.shopee.vn/file/4e0ee426458299c169ba0908fb4b9b9f"
        },
        {
            name: "Dép",
            soLuong: 6000,
            image:
                "https://cf.shopee.vn/file/582170e1c0ba7c882fc20048cc32f549"
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
                        <div>Giá:{item.soLuong}</div>
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