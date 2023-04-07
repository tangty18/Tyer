import conn from "../../tools/pg";
export async function layHet() {
  let res = await conn.query(
    `SELECT gh.id_sanpham, gh.soluong, gh.username, dt.name,dt.image,dt."tocDo",dt.id from giohang as gh, dienthoai as dt where gh.theloai = 'dienthoai' and gh.username = 'abc1' and gh.id_sanpham = dt.id`,
    []
  );
  return res.rows;
}
