import conn from "../../tools/pg";
import { v4 as uuidv4 } from "uuid";


export async function themSanPhamVaoDonHang({madonhang,masanpham,soluong,id}) {
    const id = uuidv4();
    let res = await conn.query(
      `INSERT INTO donhang(
         madonhang, masanpham, soluong, id)
         VALUES ($1, $2, $3, $4);`,
      [madonhang,masanpham,soluong,id]
    );
    return res.rows;
  }