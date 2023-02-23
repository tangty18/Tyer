import conn from "../../tools/pg"
export function layMot(){
  return  ([
        {
          name: "ROG",
          soLuong: 6000,
          namRamat:2019,
          khoiLuong:109,
          sucManh:500,
          image:
            "https://fptshop.com.vn/Uploads/Originals/2022/9/30/638001227463678942_asus-gaming-zephyrus-g513-xam-led-4zone-dd.jpg",
        }]
    )
}



export async function layHet(){
  let res = await conn.query("SELECT *FROM mayting",[])
    return res.rows;
}