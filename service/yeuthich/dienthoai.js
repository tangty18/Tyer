import conn from "../../tools/pg";
import {v4 as uuidv4} from 'uuid';
export async function layHet(username) {
  let res = await conn.query(
    `SELECT yt.id_sanpham, yt.soluong, yt.username, dt.name,dt.image,dt."tocDo",dt.id 
    from yeuthich as yt, dienthoai as dt 
    where yt.theloai = $1 and yt.username = $2 and yt.id_sanpham = dt.id`,
    ['dienthoai',username]
  );
  return res.rows;
}
export async function themMot(username,id_product,quantity){
  const id = uuidv4()
  let res = await conn.query(
   `INSERT INTO yeuthich(
     id, theloai, id_sanpham, username, soluong)
     VALUES ($1, $2, $3, $4, $5);`,
     [id,'dienthoai',id_product,username,quantity]
  )
  return res.rows;
 }