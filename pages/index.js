import { useRouter } from "next/router";
import styles from "./trangchu.module.css";
import { useState } from "react";
import { Layout1 } from "../components/layout/layout1";
export default function Home() {
  const router = useRouter();

  const [hienDSSP, setHienDSSP] = useState(true);

  useEffect(()=>{
    setDanhSachSP(props.danhSachBut)
  },[props.danhSachBut])
  


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

export async function getServerSideProps(context) {
  const type = context.query.type;
  // Fetch data from external API

  const { data } = await fetchData.post("/sanpham/get-all", { theloai: type });
  // Pass data to the page via props


  return { props: { danhSachBut: data } };
}
