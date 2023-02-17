import { layMot } from "../../../service/dogiadung/gia-dung"

layMot
export default function handler(req, res) {
let motMonHang = layMot()
    res.status(200).json(motMonHang)}