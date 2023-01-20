import { Layout1 } from "../../components/layout/layout1";
export default function ChiTiet() {
    return <div>Chi tiet san pham</div>;
  }
  ChiTiet.getLayout = function getLayout(page) {
    return (
      <Layout1>
        <ChiTiet />
      </Layout1>
    );
  };