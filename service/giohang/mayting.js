import conn from "../../tools/pg";
export async function layHet(username) {
  let res = await conn.query(
    `SELECT gh.id_sanpham, gh.soluong, gh.username, mt.name,mt.image,mt."sucManh",mt.id 
    from giohang as gh, mayting as mt 
    where gh.theloai = $1 and gh.username = $2 and gh.id_sanpham = mt.id `,
    ['maytinh',username]
  );
  return res.rows;
}
