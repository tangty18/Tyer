import { useState } from "react";
import { Layout1 } from "../../components/layout/layout1";
export default function VeChungToi(){
const [tenNguoiLam, setTenNguoiLam] = useState("Hoàng Tý")
    return(
        <div>Hoàng Tý</div>
    )
}
VeChungToi.getLayout = function getLayout(page) {
    return (
      <Layout1>
        <VeChungToi />
      </Layout1>
    );
  };
