import { layHet } from "../../../service/yeuthich/dogiadung";
export default function handler(req, res) {
   let toanBo = layHet()
  res.status(200).json(toanBo)
}
     