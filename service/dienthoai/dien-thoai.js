import conn from "../../tools/pg";
export function layMot(){
   return ([
        {
          name: "Điện Thoại Bàn",
          soLuong: 23000,
          hang: "Soni",
          gioiTinh: "nam",
          tocDo: 150,
          khoiLuong: 13,
          image:
            "https://cdn01.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_344/dien-thoai-ban-panascl_450.png.webp",
        }])
}


export async function layHet(){
  let res = await conn.query("SELECT *FROM dienthoai",[])
    return res.rows;
}
