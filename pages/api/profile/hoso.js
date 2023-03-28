export default async function handler(req, res) {
  const id = req.body?.id;

  const chiaKhoa = req.cookies?.mykey;


  if (chiaKhoa) {
    res.status(200).json({
      isLogin: true,
      user: {
        ten: "Ty",
      },
    });
  } else {
    res.status(200).json({ isLogin: false });
  }
}
