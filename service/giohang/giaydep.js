import conn from "../../tools/pg";
export async function layHet() {
  let res = await conn.query(
    `SELECT gh.id_sanpham, gh.soluong, gh.username, d.name,d.image,d."phongThu",d.id 
    from giohang as gh, giaydep as d 
    where gh.theloai = 'giaydep' and gh.username = 'abc1' and gh.id_sanpham = d.id `,
    []
  );
  return res.rows;
}