import {
  themSanPhamVaoGioHang,
  layHet,
  capNhat,
  xoaSP,

} from "../../../service/giohang/giohang";

const jwt = require("jsonwebtoken");
export default async function handler(req, res) {
  if (req.method == "GET") {
    try {
      const chiaKhoa = req.cookies?.mykey;

      var decoded = jwt.verify(chiaKhoa, process.env.PASS_JWT);

      if (chiaKhoa) {
        const toanBo = await layHet(decoded.username);

        res.status(200).json(toanBo);
      } else {
        res.status(200).json([]);
      }
    } catch (error) {
      res.status(200).json([]);
    }
  } else if (req.method == "POST") {
    const id_product = req.body?.id_product;

    try {
      const chiaKhoa = req.cookies?.mykey;

      var decoded = jwt.verify(chiaKhoa, process.env.PASS_JWT);

      if (chiaKhoa) {
        const toanBo = await themSanPhamVaoGioHang(
          decoded.username,
          id_product,
          1
        );

        res.status(200).json(toanBo);
      } else {
        res.status(200).json([]);
      }
    } catch (error) {
      res.status(200).json([]);
    }
  } else if (req.method == "PUT") {
    const id_sanpham = req.body?.id_product;
    const soluong = req.body?.soluong;

    try {
      const chiaKhoa = req.cookies?.mykey;

      var decoded = jwt.verify(chiaKhoa, process.env.PASS_JWT);

      const username = decoded.username

      if (chiaKhoa) {
        const toanBo = await capNhat({id_sanpham, soluong, username});

        res.status(200).json(toanBo);
      } else {
        res.status(200).json([]);
      }
    } catch (error) {
      res.status(200).json([]);
    }
  }else if (req.method == "DELETE") {
    const id_sanpham = req.query?.id_product;
    

    try {
      const chiaKhoa = req.cookies?.mykey;

      var decoded = jwt.verify(chiaKhoa, process.env.PASS_JWT);

      const username = decoded.username

      if (chiaKhoa) {
        const xoaTungSanPham = await xoaSP ({id_sanpham, username});

        res.status(200).json(xoaTungSanPham);
      } else {
        res.status(200).json([]);
      }
    } catch (error) {
      res.status(200).json([]);
    }
  
  }
}
