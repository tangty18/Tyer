import { dangNhapSevice } from "../../../service/dangnhap/dang-nhap";
const jwt = require("jsonwebtoken");
export default async function handler(req, res) {
  const data = req.body;
  const username = data.username;
  const password = data.password;

  // console.log({data})

  const ketQuaCallService = await dangNhapSevice(username, password);

  let ketQuaDangNhap = {};
  if (ketQuaCallService.length == 1) {
    ketQuaDangNhap = true;
    const user = ketQuaCallService[0];
    const thongTinChiaKhoa = {
      role: user.role,
      username: user.username,
    };
    const chiaKhoa = jwt.sign(thongTinChiaKhoa, process.env.PASS_JWT);
    ketQuaDangNhap = {
      isValid: true,
      chiaKhoa: chiaKhoa,
    };
  } else {
    ketQuaDangNhap = {
      isValid: false,
      chiaKhoa: null,
    };
  }

  res.status(200).json({ isLoginSucces: ketQuaDangNhap });
}
