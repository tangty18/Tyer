import { layMot } from "../../../service/san-pham/get-one";

export default async function handler(req, res) {
  const id = req.body?.id;
  const theloai = req.body?.type;

  console.log({ theloai });

  let motMonHang = await layMot(id, theloai);
  res.status(200).json(motMonHang);
}
