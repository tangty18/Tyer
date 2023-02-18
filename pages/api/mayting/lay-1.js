import { layMot } from "../../../service/mayting/mayting"
export default function handler(req, res) {
    let motMonHang = layMot()
  res.status(200).json(motMonHang)
  }