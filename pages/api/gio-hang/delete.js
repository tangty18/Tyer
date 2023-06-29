import { xoaSachSP } from "../../../service/giohang/giohang";

const jwt = require("jsonwebtoken");
export default async function handler(req, res) {


    try {
      const chiaKhoa = req.cookies?.mykey;

      var decoded = jwt.verify(chiaKhoa, process.env.PASS_JWT);

      const username = decoded.username

      if (chiaKhoa) {
        const xoaTungSanPham = await xoaSachSP ({ username});

        res.status(200).json(xoaTungSanPham);
      } else {
        res.status(200).json([]);
      }
    } catch (error) {
      res.status(200).json([]);
    }

}