import { useState } from "react";
import { Layout1 } from "../../components/layout/layout1";
import { Layout2 } from "../../components/layout/layout2";

export default function DangNhap() {

const [username,setUsername]= useState("")
const [password,setPassword]= useState("")

function onChangeUserName(event){
  setUsername(event.target.value)

}

function onChangePassword(event){
  setPassword(event.target.value)

}

function onLogin(event){
  event.preventDefault()

  const data = {
    username:username,
    password:password
  
  }
  alert ('Đăng Nhập Thành Công')
}



  return (
    <div>
      <form onSubmit={onLogin}>
        <label for="fname">Your Name:</label><br></br>
        <input type="text" id="fname" name="username" onClick={onChangeUserName} /><br></br>
        <label for="lname">PassWord:</label><br />
        <input type="text" id="lname" name="password" onClick={onChangePassword} /><br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}
DangNhap.getLayout = function getLayout(page) {
  return (
    <Layout2>
      <DangNhap />
    </Layout2>
  );
};
