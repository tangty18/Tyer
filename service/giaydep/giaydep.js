import conn from "../../tools/pg"
export function layMot(){
 return   ([
        {
          name: "Dép",
          soLuong: 6000,
          doben:"chó cắn không đứt",
          phongThu:5000,
          mauSac:"xanh",
          image: "https://cf.shopee.vn/file/582170e1c0ba7c882fc20048cc32f549",
        }]
    )
}

export  async function layHet(){
    let res = await conn.query("SELECT *FROM giaydep",[])
      return res.rows;
  }
  
