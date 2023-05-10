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
  mauSac,
  soLuong
) {
  console.log(soLuong)
  let res;
  if (theLoai == "but") {
    res = await conn.query(
      `INSERT INTO but(
        id, name, image, gia,soluong)
        VALUES ($1, $2, $3, $4,$6);`,
      [id, tenSanPham, image, gia,soLuong]
    );
  } else if (theLoai == "dienthoai") {
    res = await conn.query(
      `INSERT INTO dienthoai(
        id, name, image, gia, hang,soluong)
        VALUES ($1, $2, $3, $4, $5,$6);`,
      [id, tenSanPham, image, gia, hang,soLuong]
    );
    
  } else if (theLoai == "dogiadung") {
    res = await conn.query(
      `INSERT INTO dogiadung(
    id, name, image, soluong,doCung,gia)
    VALUES ($1, $2, $3, $4,$5,$6);`,
      [id, tenSanPham, image, soLuong, doCung,gia]
    );
  } else if (theLoai == "mayting") {
    res = await conn.query(
      `INSERT INTO mayting(
        id, name, image, gia,sucmanh,soluong)
        VALUES ($1, $2, $3, $4,$5,$6);`,
      [id, tenSanPham, image, gia, sucManh]
    );
  } else if (theLoai == "quanao") {
    res = await conn.query(
      `INSERT INTO quanao(
        id, name, image, gia,mauSac,soluong)
        VALUES ($1, $2, $3, $4,$5,$6);`
        [(id, tenSanPham, image, gia, mauSac,soLuong)]
    );
  } else {
    res = await conn.query(
      `INSERT INTO giaydep(
        id, name, image, gia,doBen,soluong)
        VALUES ($1, $2, $3, $4,$5,$6);`,
      [id, tenSanPham, image, gia, doBen,soLuong]
    );
  }
  return res.rows;
}
