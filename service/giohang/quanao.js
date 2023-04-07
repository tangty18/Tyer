import conn from "../../tools/pg";
export async function layHet() {
  let res = await conn.query(
    `SELECT gh.id_sanpham, gh.soluong, gh.username, ao.name,ao.image,ao.size,ao.id from giohang as gh, quanao as ao where gh.theloai = 'quanao' and gh.username = 'abc1' and gh.id_sanpham = ao.id`,
    []
  );
  return res.rows;
}