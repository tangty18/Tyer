import { layMot } from "../../../service/quanao/quanao"
export default function handler(req, res) {
   let motMonHang = layMot()
  res.status(200).json(motMonHang)
  }
