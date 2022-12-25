import { useRouter } from "next/router"
import { useState } from "react"
export default function Home() {
  const router = useRouter()
const [theLoaiSP,setTheLoaiSP]=useState([
  {
    theLoai:"Bút",
    key:"but",
  },
  {
    theLoai:"Quần Áo",
    key:"quanao"
  }
])

  function goHome() {
    router.push({
      pathname: "/homepage"
    })
  }

  function goHome1(){
    router.push({
      pathname:"/testhome"
    })
  }

  function xemChiTiet(key){
router.push({
  pathname:"/" + key,
})
  }
  

  return (
    <>
      {theLoaiSP.map((item)=>(
        <div>
          Thể loại: {item.theLoai}{" "}
          <button onClick={()=>xemChiTiet(item.key)}>Xem Chi Tiết</button>
        </div>
      ))}

      <img
        src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/296099477_101442889337580_4175294896963945968_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ghIAAjqj_d8AX_LpKt3&tn=LXo4bNndAb8GCCKs&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfAEktBHSMmK2WN-6wD-AF7sbaRx4qsBzKSOf90txWIh5w&oe=63AD3375"
        alt="13"
        width={500}

      />
      <button onClick={goHome}>Đừng Nhấn</button>
      <button onClick={goHome1}>Đừng Nhấn 2</button>
    </>
  )
}
