import conn from "../../tools/pg";
export async function layHet(username) {
  let res = await conn.query(
    `SELECT gh.id_sanpham, gh.soluong, gh.username,b.gia, b.name,b.image,b."khoiLuong",b.id 
    from giohang as gh, but as b 
    where gh.theloai = $1 and gh.username = $2 and gh.id_sanpham = b.id `,
    ['but',username]
  );


  return res.rows;
}
