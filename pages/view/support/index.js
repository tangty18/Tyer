import { useState } from "react";
import { Layout1 } from "../../../components/layout/layout1";
import styles from "./support.module.css";

export default function HoTro() {
  const [thongTin, setThongTin] = useState("Đây");

  const openInNewTab = () => {
    const newWindow = window.open(
      "https://www.facebook.com/profile.php?id=100084156063521",
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };
  const openInNewTab2 = () => {
    const newWindow = window.open(
      "https://www.youtube.com/channel/UCpuauVqOqAO-29hZz2HwzDw",
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div>
      <div onClick={openInNewTab2} className={styles.able_to_click}>Youtube</div>
      <div onClick={openInNewTab} className={styles.able_to_click}>
        Facebook
      </div>
    </div>
  );
}
HoTro.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <HoTro />
    </Layout1>
  );
};
