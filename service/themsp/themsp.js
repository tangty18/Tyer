import conn from "../../tools/pg";
export async function themHang(
  id,
  tenSanPham,
  gia,
  theLoai,
  image,
  hang,
  doCung,
  doBen,
  sucManh,
  mauSac
) {
  let res;
  if (theLoai == "but") {
    res = await conn.query(
      `INSERT INTO but(
        id, name, image, gia)
        VALUES ($1, $2, $3, $4);`,
      [id, tenSanPham, image, gia]
    );
  } else if (theLoai == "dienthoai") {
    res = await conn.query(
      `INSERT INTO dienthoai(
        id, name, image, gia, hang)
        VALUES ($1, $2, $3, $4, $5);`,
      [id, tenSanPham, image, gia,hang]
    );
  } else if (theLoai == "dogiadung") {
    res = await conn.query(
      `INSERT INTO dogiadung(
    id, name, image, gia,doCung)
    VALUES ($1, $2, $3, $4,$5);`,
      [id, tenSanPham, image, gia, doCung]
    );
  } else if (theLoai == "mayting") {
    res = await conn.query(
      `INSERT INTO mayting(
        id, name, image, gia,sucmanh)
        VALUES ($1, $2, $3, $4,$5);`,
      [id, tenSanPham, image, gia, sucManh]
    );
  } else if (theLoai == "quanao") {
    res = await conn.query(
      `INSERT INTO quanao(
        id, name, image, gia,mauSac)
        VALUES ($1, $2, $3, $4,$5);`[(id, tenSanPham, image, gia, mauSac)]
    );
  } else {
    res = await conn.query(
      `INSERT INTO giaydep(
        id, name, image, gia,doBen)
        VALUES ($1, $2, $3, $4,$5);`,
      [id, tenSanPham, image, gia, doBen]
    );
  }
  return res.rows;
}
