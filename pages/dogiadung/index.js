import { useState } from "react";
export default function DoGiaDung() {
    const[danhSachSP, setDanhSachSP] = useState([
        {
            name: "Tủ Lạnh",
            soLuong: 23000,
            image:
                ""
        },
        {
            name: "Máy Giặt",
            soLuong: 15000,
            image:
                ""
        },
        {
            name: "Bàn ủi",
            soLuong: 50000,
            image:
                ""
        },
        {
            name: "Ấm Đun",
            price: 50000,
            image:
                ""
        },
        {
            name: "Bếp Điện Tử",
            soLuong: 6000,
            image:
                ""
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
                        <div>Số Lượng:{item.soLuong}</div>
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
                             <div>Số Lượng:{item.soLuong}</div>
                             <div>
                                <img src={item.image} witdth={100}  height={100}/>
                             </div>
                         </div>
                        
                    ))}
            </div>
        </div>
        
   
     
 )


}