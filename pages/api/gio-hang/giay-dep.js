import { layHet } from "../../../service/giohang/giaydep"
export default function handler(req, res) {
    let toanBo = layHet()
  res.status(200).json(toanBo)
  }