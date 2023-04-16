import conn from "../../tools/pg";
import {v4 as uuidv4} from 'uuid';
export async function layHet(username) {
  let res = await conn.query(
    `SELECT yt.id_sanpham, yt.soluong, yt.username, d.name,d.image,d."phongThu",d.id 
    from yeuthich as yt, giaydep as d 
    where yt.theloai = $1 and yt.username = $2 and yt.id_sanpham = d.id `,
    ['giaydep',username]
  );
  return res.rows;
}

export async function themMot(username,id_product,quantity){
  const id = uuidv4()
  let res = await conn.query(
   `INSERT INTO yeuthich(
     id, theloai, id_sanpham, username, soluong)
     VALUES ($1, $2, $3, $4, $5);`,
     [id,'giaydep',id_product,username,quantity]
  )
  return res.rows;
 }