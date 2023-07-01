import { xoaSachSP } from "../../../service/giohang/giohang";

const jwt = require("jsonwebtoken");
export default async function handler(req, res) {
if(req.method == "DELETE"){

  try {
    const chiaKhoa = req.cookies?.mykey;

    var decoded = jwt.verify(chiaKhoa, process.env.PASS_JWT);

    const username = decoded.username

    if (chiaKhoa) {
      const xoaSach = await xoaSachSP ({ username});

      res.status(200).json({message:"Xóa Thành Công"});
    } else {
      res.status(400).json({message:"Không Lấy Được Chìa Khóa"});
    }
  } catch (error) {
    res.status(200).json({
      message:error,
    });
  }
}else{
  res.status(400).json({message:"sai method"});
}


}