import { Header3 } from "../header/header3";
import { Footer3 } from "../footer/footer3";
export function Layout3({children}) {
  return (
    <>
      <Header3 />
      <main> {children}</main>
      <Footer3 />
    </>
  );
}
