import conn from "../../tools/pg";

export async function layMot(idSP,theloai){
  let res = await conn.query(
    `SELECT masp, hinhanh,gia,soluong,ten FROM sanpham WHERE theloai = $1 and masp = $2`,
    [theloai,idSP]);

   return res.rows;


}