import { layMot } from "../../../service/giaydep/giaydep"
export default function handler(req, res) {
    let motMonHang = layMot()
  res.status(200).json(motMonHang)
}