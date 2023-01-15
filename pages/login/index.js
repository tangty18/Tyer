import { useState } from "react";
import { Layout1 } from "../../components/layout/layout1";

export default function DangNhap() {
return(
    <div>
        123
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
  