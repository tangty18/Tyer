import { layHet } from "../../../service/giohang/dienthoai";
const jwt = require("jsonwebtoken");
export default async function handler(req, res) {
  const id = req.body?.id;

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
  }