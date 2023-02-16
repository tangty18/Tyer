import { useState } from "react";
import { Layout1 } from "../../components/layout/layout1";

export default function TestComponent() {
  const [thongTin, setThongTin] = useState("Đây");

  return (
    <div>
       <button>tést</button>

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
