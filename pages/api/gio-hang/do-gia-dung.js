import { layHet } from "../../../service/giohang/gia-dung"
export default async function handler(req, res) {

  let toanBo= await layHet()
  res.status(200).json(toanBo)
  
}