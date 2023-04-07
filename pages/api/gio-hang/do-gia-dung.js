import { layHet } from "../../../service/giohang/gia-dung"
export default async function handler(req, res) {

  let toanBo=  layHet()
  res.status(200).json(toanBo)
  
}