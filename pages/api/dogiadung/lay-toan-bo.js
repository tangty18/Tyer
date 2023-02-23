import { layHet } from "../../../service/dogiadung/gia-dung"
export default async function handler(req, res) {
   let toanBo = await layHet()
  res.status(200).json(toanBo)
  
  }