import { Layout1 } from "../../components/layout/layout1";
import { useState } from "react";

export default function DangKy() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    sdt: "",
    role: "", // Vai trò mặc định sẽ được đặt là "user"
    ten: "",
    ho: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Đặt vai trò mặc định là "user"
    const formDataWithDefaultRole = {
      ...formData,
      role: "user",
    };
    // Gửi dữ liệu đăng ký lên server hoặc thực hiện xử lý tương ứng
    console.log("Dữ liệu đăng ký:", formDataWithDefaultRole);
  }

  return (
    <div>
      <h2>Đăng Ký</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên đăng nhập:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
       
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Số điện thoại:</label>
          <input
            type="tel"
            name="sdt"
            value={formData.sdt}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div>
          <label>Tên:</label>
          <input
            type="text"
            name="ten"
            value={formData.ten}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Họ:</label>
          <input
            type="text"
            name="ho"
            value={formData.ho}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Đăng Ký</button>
      </form>
    </div>
  );
}

DangKy.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <DangKy />
    </Layout1>
  );
};
