import conn from "../../tools/pg";
export async function layHet() {
  let res = await conn.query(
    `SELECT gh.id_sanpham, gh.soluong, gh.username, gd.name,gd.image,gd."doCung",gd.id 
    from giohang as gh, dogiadung as gd 
    where gh.theloai = 'dogiadung' and gh.username = 'abc1' and gh.id_sanpham = gd.id `,
    []
  );
  return res.rows;
}