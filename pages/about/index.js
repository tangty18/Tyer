import { useState } from "react";
import { Layout1 } from "../../components/layout/layout1";


export default function VeChungToi() {
  

 

  return (
    <div>
        Về Chúng Tôi
      </div>
    
  );
}
VeChungToi.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <VeChungToi />
    </Layout1>
  );
};