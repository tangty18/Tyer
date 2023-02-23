import conn from "../../tools/pg"
export function layMot(){
   return ([
        {
          name: "Bếp Điện Tử",
          soLuong: 6000,
          doCung: 100,
          mauSac: "đỏ",
          tanCong: 135,
          image: "https://cdn.tgdd.vn/ValueIcons/bep-tu-doi.png",
        },
      ])
}

export async function layHet(){
  let res = await conn.query("SELECT *FROM dogiadung",[])
    return res.rows;
}
