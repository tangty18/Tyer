import styles from './admin.module.css'; // Import CSS module
import React, { useEffect, useState } from 'react';


export function LayoutAdmin() {

  return (

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
  );
    



    };


