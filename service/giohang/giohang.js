import conn from "../../tools/pg"
import {v4 as uuidv4} from 'uuid';


export async function themSanPhamVaoGioHang(username,id_product,quantity){
    const id = uuidv4()
    let res = await conn.query(
     `INSERT INTO giohang(
       id, id_sanpham, username, soluong)
       VALUES ($1, $2, $3, $4);`,
       [id,id_product,username,quantity]
    )
    return res.rows;
}

export async function layHet(username) {
    let res = await conn.query(
      `SELECT s.hinhanh,s.gia,s.ten,g.soluong
       FROM giohang as g, sanpham as s
       WHERE username = $1 AND g.id_sanpham = s.masp`,
      [username]
    );
    return res.rows;
  }