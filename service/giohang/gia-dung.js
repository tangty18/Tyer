import conn from "../../tools/pg";
export async function layHet(username) {
  let res = await conn.query(
    `SELECT gh.id_sanpham, gh.soluong, gh.username, gd.name,gd.image,gd."doCung",gd.id 
    from giohang as gh, dogiadung as gd 
    where gh.theloai = $1 and gh.username = $2 and gh.id_sanpham = gd.id `,
    ['dogiadung',username]
  );
  return res.rows;
}