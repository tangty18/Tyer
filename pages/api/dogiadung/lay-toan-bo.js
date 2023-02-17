import { layHet } from "../../../service/dogiadung/gia-dung"
export default function handler(req, res) {
   let toanBo = layHet()
  res.status(200).json(toanBo)
  
  }