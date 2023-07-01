import { themSanPhamVaoDonHang } from "../../../service/donhang/donhang";

const jwt = require("jsonwebtoken");
export default async function handler(req, res) {
if (req.method == "POST") {
    const id_product = req.body?.id_product;

    try {
      const chiaKhoa = req.cookies?.mykey;

      var decoded = jwt.verify(chiaKhoa, process.env.PASS_JWT);

      if (chiaKhoa) {
        const toanBo = await themSanPhamVaoDonHang(
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
}
}