import { themHang } from "../../../service/themsp/themsp";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
  let gia = req.body.giaSanPham;
  const tenSanPham = req.body.tenSanPham;
  const image = req.body.image;
  const theLoai = req.body.theLoai;
  const id = uuidv4();
  gia = parseInt(gia);
  const doBen = req.body.doBen;
  const mauSac = req.body.mauSac
  const doCung = req.body.doCung
  const hang = req.body.hang
  let soLuong = req.body.soLuong
  const sucmanh = req.body.sucmanh



  let them = await themHang(id, tenSanPham, gia, theLoai, image,hang,doCung, doBen,sucmanh,mauSac,soLuong);
  res.status(200).json(them);
}
