import conn from "../../tools/pg";
export async function layHet(username) {
  let res = await conn.query(
    `SELECT gh.id_sanpham, gh.soluong, gh.username, d.name,d.image,d."phongThu",d.id 
    from giohang as gh, giaydep as d 
    where gh.theloai = $1 and gh.username = $2 and gh.id_sanpham = d.id `,
    ['giaydep',username]
  );
  return res.rows;
}