import { layHet } from "../../../service/san-pham/get-all"
export default async function handler(req, res) {

const theloai = req.body.theloai

  let toanBo= await layHet(theloai)
  res.status(200).json(toanBo)
  
}
