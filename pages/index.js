import { useRouter } from "next/router";
import styles from "./trangchu.module.css";
import { useState } from "react";
import { Layout1 } from "../components/layout/layout1";
export default function Home() {
  const router = useRouter();

  

  return (
    <div className={styles.app}>
   <div className={styles.img}>
   <img src="https://web1g.cdn.vccloud.vn/libi/category/banner-sale-01.jpg"  ></img>
   </div>

      <div className={styles.sanpham}>

      </div>
    
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <Home />
    </Layout1>
  );
};

