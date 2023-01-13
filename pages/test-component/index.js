import { useState } from "react";
import { Layout1 } from "../../components/layout/layout1";
import { Button1 } from "../../components/buttons/buttons";

export default function TestComponent() {
  const [thongTin, setThongTin] = useState("Đây");

  return (
    <div>
      <Button1 text={"Test 1"} />
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
