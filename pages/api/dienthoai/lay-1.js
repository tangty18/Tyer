export default function handler(req, res) {
    res.status(200).json([
        {
          name: "Điện Thoại Bàn",
          soLuong: 23000,
          hang: "Soni",
          gioiTinh: "nam",
          tocDo: 150,
          khoiLuong: 13,
          image:
            "https://cdn01.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_344/dien-thoai-ban-panascl_450.png.webp",
        }])
    }