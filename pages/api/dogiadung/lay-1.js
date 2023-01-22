export default function handler(req, res) {
    res.status(200).json([
        {
          name: "Bếp Điện Tử",
          soLuong: 6000,
          doCung: 100,
          mauSac: "đỏ",
          tanCong: 135,
          image: "https://cdn.tgdd.vn/ValueIcons/bep-tu-doi.png",
        },
      ]
    )}