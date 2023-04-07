import { layHet } from "../../../service/giohang/but";
export default async function handler(req, res) {

  let toanBo=  await layHet()
  res.status(200).json(toanBo)
  
}