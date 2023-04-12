import conn from "../../tools/pg";
export async function layHet(username) {
  let res = await conn.query(
    `SELECT gh.id_sanpham, gh.soluong, gh.username, ao.name,ao.image,ao.size,ao.id 
    from giohang as gh, quanao as ao 
    where gh.theloai = $1 and gh.username = $2 and gh.id_sanpham = ao.id`,
    ['quanao',username]
  );
  return res.rows;
}