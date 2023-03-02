import { layMot } from "../../../service/quanao/quanao"
export default async function handler(req, res) {
  const id = req.body?.id;
  
  let motMonHang = await layMot(id);
  res.status(200).json(motMonHang);
  
}