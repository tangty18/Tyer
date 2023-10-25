// middleware/auth.js
import jwt from 'jsonwebtoken';

export default function requireAdminAuth(handler) {
  return async (req, res) => {
    try {
      const token = req.cookies.mykey; // Đọc token từ cookie hoặc header, tùy theo cách bạn lưu trữ nó
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      // Giải mã token
      const decoded = jwt.verify(token, process.env.PASS_JWT);

      // Kiểm tra xem người dùng có quyền admin không
      if (decoded && decoded.role === 'admin') {
        return handler(req, res); // Cho phép truy cập vào trang quản lý
      } else {
        return res.status(403).json({ message: 'Forbidden' }); // Không có quyền truy cập
      }
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };
}
