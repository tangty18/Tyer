export default function handler(req, res) {
    res.status(200).json([
        {
          name: "Áo thun",
          soLuong: 6000,
          mauSac:"Đỏ",
          size:30,
          image:
            "https://product.hstatic.net/1000357687/product/1_6f661df1e8b44c58bf89a7961b42d184_master.jpg",
        }]
    )}