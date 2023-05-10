import conn from "../../tools/pg";
import {v4 as uuidv4} from 'uuid';
export async function layHet(username) {
  let res = await conn.query(
    `SELECT gh.id_sanpham, gh.soluong, gh.username, gd.name,gd.image,gd."doCung",gd.id,gd.soluong
    from giohang as gh, dogiadung as gd 
    where gh.theloai = $1 and gh.username = $2 and gh.id_sanpham = gd.id `,
    ['dogiadung',username]  
  );
  return res.rows;
}

export async function themMot(username,id_product,quantity){
  const id = uuidv4()
  let res = await conn.query(
   `INSERT INTO giohang(
     id, theloai, id_sanpham, username, soluong)
     VALUES ($1, $2, $3, $4, $5);`,
     [id,'dogiadung',id_product,username,quantity]
  )
  return res.rows;
 }