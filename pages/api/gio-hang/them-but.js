import { themMotChiTiet } from "../../../service/giohang/but";
const jwt = require("jsonwebtoken");
export default async function handler(req, res) {
    const id_product = req.body?.id_product;
  
    try {
    
      console.log(id_product)

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