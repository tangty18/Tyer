import { useEffect } from "react";
import { Layout1 } from "../../../components/layout/layout1";
import { fetchDataNew } from "../../../tools/axios";
export default function DonHang({ duLieuBanDau }) {
  useEffect(() => {
    console.log({ test: duLieuBanDau });
  }, []);
  return (
    <div>
      {duLieuBanDau.rows.map((value,index)=>(
        <div> 
          <div> {value.madonhang} </div>
          <div> {value.trangthai}</div>
        </div>
      ))}
    </div>

  );
}

DonHang.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <DonHang duLieuBanDau={page.props} />
    </Layout1>
  );
};

export async function getServerSideProps(context) {
  const { req, res } = context;
  // Fetch data from external API

  const { data } = await fetchDataNew.get("/api/donhang/donhang", {
    headers: req.headers,
  });

  // Pass data to the page via props

  return { props: { data } };
}
