import { useState } from "react";
import { Layout1 } from "../../components/layout/layout1";

export default function DangNhap() {
  return (
    <div>
      <form>
        <label for="fname">First name:</label><br></br>
        <input type="text" id="fname" name="fname" value="John" /><br></br>
        <label for="lname">Last name:</label><br />
        <input type="text" id="lname" name="lname" value="Doe" /><br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}
DangNhap.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <DangNhap />
    </Layout1>
  );
};
