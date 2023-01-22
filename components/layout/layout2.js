import { Header2 } from "../header/header2";
import { Footer2 } from "../footer/footer2";

export function Layout2({ children }) {
  return (
    <>
      <Header2 />
      <main>{children}</main>
      <Footer2 />
    </>
  );
}