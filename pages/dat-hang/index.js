import { useState } from "react";
import { Layout3 } from "../../components/layout/layout3";
export default function DatHang(){

    return(
        <div>đặt hàng ở đây</div>
    )
}
DatHang.getLayout = function getLayout(page) {
    return (
      <Layout3>
        <DatHang />
      </Layout3>
    );
  };