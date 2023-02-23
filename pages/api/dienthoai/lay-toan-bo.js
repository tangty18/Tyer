import { layHet } from "../../../service/dienthoai/dien-thoai"
export default async function handler(req, res) {

  let toanBo= await layHet()
  res.status(200).json(toanBo)
  
}