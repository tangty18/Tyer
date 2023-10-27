import { useRouter } from "next/router";
import { useEffect  } from "react";
import { LayoutAdmin } from "../../components/header/admin";
import { fetchData } from "../../tools/axios";
import { useState } from "react";
import styles from './admintext.module.css'; // Import CSS module
import { Layout1 } from "../../components/layout/layout1";


export default function ADMIN({props}) {
  const [isLoginAdmin, setIsLoginAdmin] = useState (props.trakey.isLoginAdmin)
   


 
    
  return <div>
    {isLoginAdmin  &&<div> </div>}
     {!isLoginAdmin && <div>     
      <div className={styles.container}>
        <br></br>
      
      <div className={styles.sidebar}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}><a href="#">Quản lý Sản phẩm</a></li>
          <li className={styles.menuItem}><a href="#">Quản lý Brand</a></li>
          <li className={styles.menuItem}><a href="#">Quản lý Catalog</a></li>
          <li className={styles.menuItem}><a href="#">Thống kê Đơn hàng</a></li>
          <li className={styles.menuItem}><a href="#">Quản lý Người dùng</a></li>
        </ul>
      </div>
      <div className={styles.content}>
        <h1>Dashboard</h1>
        {/* Nội dung và chức năng quản lý */}
      </div>

      
    </div>

     </div>}
    
      
     
  </div>
    
  
}



ADMIN.getLayout = function getLayout(page) {
    return (
      <Layout1>
        <ADMIN props = {page.props}/>
      </Layout1>
    );
  };
  
  
export async function getServerSideProps(context){
const keyAdmin = context.req.cookies.mykey
const {data} = await fetchData.get("/checkchiakhoaadmin/chiakhoaadmin",{
  params:{
    chiaKhoa:keyAdmin,
  }
})
return {props: {trakey:data}}
}