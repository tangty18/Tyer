import { layMot } from "../../../service/but/but";

export default function handler(req, res) {
  let motMonHang = layMot();
  res.status(200).json(motMonHang);
}
