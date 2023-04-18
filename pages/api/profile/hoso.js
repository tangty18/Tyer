import { hoSoSevice } from "../../../service/profile/hoso";
const jwt = require("jsonwebtoken");
export default async function handler(req, res) {
  const id = req.body?.id;


  

  
    try {
      const chiaKhoa = req.cookies?.mykey;
      var decoded = jwt.verify(chiaKhoa,process.env.PASS_JWT)
      if (chiaKhoa) {
        const ketQuaCallService = await hoSoSevice(decoded.username)
       
        res.status(200).json({
          isLogin: true,
          user: {
            ... ketQuaCallService[0],
          },
        });
      } else {
        res.status(200).json({ isLogin: false });
      }
    } catch (error) {
      res.status(200).json({
        isLogin: false,
        error,
        })
    }
 

  
}