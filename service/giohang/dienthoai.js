import conn from "../../tools/pg";
export async function layHet(username) {
  let res = await conn.query(
    `SELECT gh.id_sanpham, gh.soluong, gh.username, dt.name,dt.image,dt."tocDo",dt.id 
    from giohang as gh, dienthoai as dt 
    where gh.theloai = $1 and gh.username = $2 and gh.id_sanpham = dt.id`,
    ['dienthoai',username]
  );
  return res.rows;
}
