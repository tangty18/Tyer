import { dangNhapSevice } from "../../../service/dangnhap/dang-nhap"
export default async function handler(req, res) {
    const data = req.body

    const username = data.username
    const password = data.password

   // console.log({data})

    const ketQuaCallService = await dangNhapSevice(username,password)

  let ketQuaDangNhap = false
  if (ketQuaCallService.length ==1){
    ketQuaDangNhap = true
  } else{
    ketQuaDangNhap = false
  }
 
    res.status(200).json({isLoginSucces:ketQuaDangNhap})
  }