import conn from "../../tools/pg";
export async function layHet() {
  let res = await conn.query(
    `SELECT gh.id_sanpham, gh.soluong, gh.username, mt.name,mt.image,mt."sucManh",mt.id from giohang as gh, mayting as mt where gh.theloai = 'maytinh' and gh.username = 'abc1' and gh.id_sanpham = mt.id `,
    []
  );
  return res.rows;
}
