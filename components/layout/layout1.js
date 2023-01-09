import { Header1 } from "../header/header1";
import { Footer1 } from "../footer/footer1";

export function Layout1({ children }) {
  return (
    <>
      <Header1 />
      <main>{children}</main>
      <Footer1 />
    </>
  );
}
