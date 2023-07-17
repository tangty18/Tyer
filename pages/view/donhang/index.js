import { Layout1 } from "../../../components/layout/layout1";
import { fetchDataNew } from "../../../tools/axios";
export default function DonHang() {

  return (
    <div>
      DonHang
    </div>
  );
}

DonHang.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <DonHang />
    </Layout1>
  );
};

export async function getServerSideProps(context) {
  
    // Fetch data from external API
  
    const { data } = await fetchDataNew.get("/api/donghang/donhang");
    console.log({dulieu:data})
    // Pass data to the page via props
  
  
    return { props: {} };
  }
  