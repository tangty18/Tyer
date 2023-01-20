export default function handler(req, res) {
  res.status(200).json([
    {
      name: "Bút Chì",
      soLuong: 23000,
      khoiLuong: 13,
      image:
        "http://img.websosanh.vn/v2/users/root_product/images/but-chi-go-2b-thien-long-gp02/2jgr174h4dbhl.jpg",
    },
  ]);
}
