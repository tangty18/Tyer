import { useState } from "react";
import { Layout1 } from "../../components/layout/layout1";


export default function Contact() {
  

 

  return (
    <div>
      Liên Hệ Tại Đây
      </div>
    
  );
}
Contact.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <Contact />
    </Layout1>
  );
};