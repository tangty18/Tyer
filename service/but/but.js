import conn from "../../tools/pg";
export function layMot(){
   return ([
        {
          name: "Bút Chì",
          soLuong: 23000,
          khoiLuong: 13,
          image:
            "http://img.websosanh.vn/v2/users/root_product/images/but-chi-go-2b-thien-long-gp02/2jgr174h4dbhl.jpg",
        },
      ])
}

export async function layHet(){
  let res = await conn.query("SELECT *FROM but",[])
    return res.rows;
}