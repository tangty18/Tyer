import { useRouter } from "next/router";
import { useState } from "react";
import { LayoutAdmin } from "../../components/header/admin";





export default function ADMIN() {
 
    
  return (
    <div></div>
  )
}



ADMIN.getLayout = function getLayout(page) {
    return (
      <LayoutAdmin>
        <ADMIN />
      </LayoutAdmin>
    );
  };
  
  
