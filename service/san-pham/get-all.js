import conn from "../../tools/pg";

export async function layHet(theloai) {
  let res = await conn.query(
    `SELECT masp, hinhanh,gia,soluong,ten
   FROM sanpham where theloai = $1`,
    [theloai]
  );
  return res.rows;
}
