export default function handler(req, res) {
    res.status(200).json([
        {
          name: "Dép",
          soLuong: 6000,
          doben:"chó cắn không đứt",
          phongThu:5000,
          mauSac:"xanh",
          image: "https://cf.shopee.vn/file/582170e1c0ba7c882fc20048cc32f549",
        }]
    )}