import {
  layThongTinDonHang,
  taoDonHang,
  taoDonHangChiTiet,
} from "../../../service/donhang/donhang";
import { layHet, xoaSachSP } from "../../../service/giohang/giohang";
const jwt = require("jsonwebtoken");

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const chiaKhoa = req.cookies?.mykey;

      var decoded = jwt.verify(chiaKhoa, process.env.PASS_JWT);

      if (chiaKhoa) {
        const thongTinGioHang = await layHet(decoded.username);

        const xoaThongTin = await xoaSachSP({ username: decoded.username });

        const taoDonHangMoi = await taoDonHang({ username: decoded.username });

        const donHangChiTiet = await taoDonHangChiTiet({
          dssp: thongTinGioHang,
          ma_dh: taoDonHangMoi.ma_dh,
        });

        res.status(200).json(donHangChiTiet);
      } else {
        res.status(200).json([]);
      }
    } catch (error) {
      res.status(200).json([]);
    }
  } else if (req.method == "GET") {
    console.log({ test: 12345 });
    try {
      const chiaKhoa = req.cookies?.mykey;

      var decoded = jwt.verify(chiaKhoa, process.env.PASS_JWT);

      if (chiaKhoa) {
        const thongTinDonHang = await layThongTinDonHang({
          username: decoded.username,
        });

        res.status(200).json({
          rows: thongTinDonHang.rows,
          rowCount: thongTinDonHang.rowCount,
        });
      } else {
        res.status(200).json([]);
      }
    } catch (error) {
      res.status(200).json([]);
    }
  }
}
