import { useState } from "react";
import { Layout1 } from "../../components/layout/layout1";
import { Button1 } from "../../components/buttons/button1/buttons";
import { Button2 } from "../../components/buttons/button2/button2";
import { Button3 } from "../../components/buttons/button3/button3";
export default function TestComponent() {
  const [thongTin, setThongTin] = useState("Đây");

  return (
    <div>
      <Button1 text={"Test 1"} />
      <Button2 text={"Test 2"} />
      <Button3 text={"Test 3"} />
    </div>
   
  );
}
TestComponent.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <TestComponent />
    </Layout1>
  );
};
