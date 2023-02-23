import conn from "../../tools/pg"
export function layMot(){
   return ([
        {
          name: "Áo thun",
          soLuong: 6000,
          mauSac:"Đỏ",
          size:30,
          image:
            "https://product.hstatic.net/1000357687/product/1_6f661df1e8b44c58bf89a7961b42d184_master.jpg",
        }]
    )
}

export async function layHet(){
  let res = await conn.query("SELECT *FROM quanao",[])
    return res.rows;
}