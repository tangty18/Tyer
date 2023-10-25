import React from 'react';
import styles from './admin.module.css'; // Import CSS module

export function LayoutAdmin() {
    return (
        
        <div className={styles.container}>
            <div className={styles.tilte}> Trang Quản Lý </div> <br/>
            <br/>
          <div className={styles.sidebar}>
            <ul>
              <li><a href="#">Menu 1</a></li>
              <li><a href="#">Menu 2</a></li>
              <li><a href="#">Menu 3</a></li>
            </ul>
          </div>
          <div className={styles.content}>
            {/* Nội dung và chức năng quản lý */}
          </div>
        </div>
      );
    };


