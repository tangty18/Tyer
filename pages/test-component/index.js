import { useState } from "react";
import { Button1 } from "../../components/buttons/button1/button1";
import { Layout1 } from "../../components/layout/layout1";

export default function TestComponent() {
  const [thongTin, setThongTin] = useState("Đây");

  return (
    <div>
       <Button1 text={"test"}/>

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
