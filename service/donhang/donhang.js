import conn from "../../tools/pg";
import { v4 as uuidv4 } from "uuid";
import format from "pg-format";

export async function taoDonHang({ username }) {
  const madonhang = uuidv4();
  const values = [[madonhang, "cho xac nhan", username]];
  const sql = format(
    "INSERT INTO donhang(madonhang,trangthai,username) VALUES %L",
    values
  );
  let res = await conn.query(sql, []);
  return { res: res, ma_dh: madonhang };
}

export async function taoDonHangChiTiet({ dssp, ma_dh }) {
  const values = [];

  for (let i = 0; i < dssp.length; i++) {
    const id = uuidv4();
    const sp = dssp[i];
    const donHangChiTiet = [id, ma_dh, sp.id_sanpham, sp.soluong];
    values.push(donHangChiTiet);
  }

  const sql = format(
    "INSERT INTO chitietdonhang(id,madonhang,masp,soluong) VALUES %L",
    values
  );
  let res = await conn.query(sql, []);
  return res;
}

export async function layThongTinDonHang({ username }) {
  const sql = ` 
SELECT * 
FROM donhang
WHERE username = '${username}'
`;
  let res = await conn.query(sql, []);
  return res;
}
