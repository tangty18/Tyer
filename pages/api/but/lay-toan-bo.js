import { layHet } from "../../../service/but/but"
export default async function handler(req, res) {

  let toanBo= await layHet()
  res.status(200).json(toanBo)
  
}
