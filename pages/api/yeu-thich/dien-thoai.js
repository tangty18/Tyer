import { layHet } from "../../../service/yeuthich/dienthoai";
export default function handler(req, res) {
   let toanBo = layHet()
  res.status(200).json(toanBo)
}
     