import conn from "../../tools/pg";
export async function layHet() {
  let res = await conn.query(
    `SELECT gh.id_sanpham, gh.soluong, gh.username, b.name,b.image,b."khoiLuong",b.id from giohang as gh, but as b where gh.theloai = 'but' and gh.username = 'abc1' and gh.id_sanpham = b.id `,
    []
  );
  return res.rows;
}
