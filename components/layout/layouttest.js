import { Header1 } from "../header/header3";
import { Footer1 } from "../footer/footer3";
export function Layout4({children}) {
  return (
    <>
      <Header1 />
      <main> {children}</main>
      <Footer1 />
    </>
  );
}
