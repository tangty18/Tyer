import { useState } from "react";
import { Layout2 } from "../../components/layout/layout2";
import { fetchDataClientSite } from "../../tools/axios";
import { useRouter } from "next/router";
export default function DangNhap() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onChangeUserName(event) {
    setUsername(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  async function onLogin(event) {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    const ketQuaCallAPI = await fetchDataClientSite.post(
      "api/dangnhap/dang-nhap",
      data
    );
    const duLieu = ketQuaCallAPI.data;

    const isLoginSucces = duLieu.isLoginSucces;

    const isValid = isLoginSucces.isValid;
    if (isValid) {
      const chiaKhoa = isLoginSucces.chiaKhoa;
      localStorage.setItem("chia-khoa", chiaKhoa);
    //  alert ('Đăng Nhập Thành Công')
    function useRouter(){
    router.push({
      pathname: "/BASE_URL",
    });
    
  }
 
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }

  return (
    <div>
      <form onSubmit={onLogin}>
        <label for="fname">Your Name:</label>
        <br></br>
        <input
          type="text"
          id="fname"
          name="username"
          onChange={onChangeUserName}
        />
        <br></br>
        <label for="lname">PassWord:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="password"
          onChange={onChangePassword}
        />
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
DangNhap.getLayout = function getLayout(page) {
  return (
    <Layout2>
      <DangNhap />
    </Layout2>
  );
};
