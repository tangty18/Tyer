import { layHet } from "../../../service/giohang/dienthoai";
export default async function handler(req, res) {

  let toanBo= await layHet()
  res.status(200).json(toanBo)
  
}