import { layMot } from "../../../service/giaydep/giaydep"
export default async function handler(req, res) {
  const id = req.body?.id;
let motMonHang = await layMot(id)
  res.status(200).json(motMonHang)
}