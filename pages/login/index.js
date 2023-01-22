import { useState } from "react";
import { Layout1 } from "../../components/layout/layout1";
import { Layout2 } from "../../components/layout/layout2";

export default function DangNhap() {
  return (
    <div>
      <form>
        <label for="fname">Your Name:</label><br></br>
        <input type="text" id="fname" name="fname" value="John" /><br></br>
        <label for="lname">PassWord:</label><br />
        <input type="text" id="lname" name="lname" value="Doe" /><br></br>
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
