import conn from "../../tools/pg";
import { v4 as uuidv4 } from "uuid";

export async function themSanPhamVaoGioHang(username, id_product, quantity) {
  const id = uuidv4();
  let res = await conn.query(
    `INSERT INTO giohang(
       id, id_sanpham, username, soluong)
       VALUES ($1, $2, $3, $4);`,
    [id, id_product, username, quantity]
  );
  return res.rows;
}

export async function layHet(username) {
  let res = await conn.query(
    `SELECT s.hinhanh,s.gia,s.ten,g.soluong,g.id_sanpham
       FROM giohang as g, sanpham as s
       WHERE username = $1 AND g.id_sanpham = s.masp`,
    [username]
  );
  return res.rows;
}

export async function capNhat({ id_sanpham, soluong, username }) {
  let res = await conn.query(
    `UPDATE giohang
      SET soluong =${soluong} 
      WHERE id_sanpham = '${id_sanpham}' AND username = '${username}' `
  );
  return res.rows;
}

export async function xoaSP({ id_sanpham, username }) {
  let sql = `
      DELETE FROM giohang 
      WHERE id_sanpham = '${id_sanpham}' AND username = '${username}'
      `;
  let res = await conn.query(sql);
  return res.rows;
}


export async function xoaSachSP({ username }) {
  let sql = `
      DELETE FROM giohang 
      WHERE username = '${username}'
      `;
  let res = await conn.query(sql);
  return res.rows;
}