import conn from "../../tools/pg";
import {v4 as uuidv4} from 'uuid';
export async function layHet(username) {
  let res = await conn.query(
    `SELECT gh.id_sanpham, gh.soluong, gh.username, mt.name,mt.image,mt."sucManh",mt.id 
    from giohang as gh, mayting as mt 
    where gh.theloai = $1 and gh.username = $2 and gh.id_sanpham = mt.id `,
    ['maytinh',username]
  );
  return res.rows;
}

export async function themMot(username,id_product,quantity){
  const id = uuidv4()
  let res = await conn.query(
   `INSERT INTO giohang(
     id, theloai, id_sanpham, username, soluong)
     VALUES ($1, $2, $3, $4, $5);`,
     [id,'maytinh',id_product,username,quantity]
  )
  return res.rows;
 }