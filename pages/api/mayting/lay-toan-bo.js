import { layHet } from "../../../service/mayting/mayting"
export default function handler(req, res) {
    let toanBo = layHet()
  res.status(200).json(toanBo)
  }