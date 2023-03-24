import { useState } from "react";
import { Layout1 } from "../../components/layout/layout1";
import { fetchData } from "../../tools/axios";
export default function VeChungToi({ props }) {
  const [isLogin, setIsLogin] = useState(props.kiemTraDangNhap.isLogin);
  return (
    <div>
      {isLogin && <div> Đăng Nhập Thành Công</div>}
      {!isLogin && <div> Yêu Cầu Đăng Nhập Dể Xem Được Nội Dung </div>}
    </div>
  );
}
VeChungToi.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <VeChungToi props={page.props} />
    </Layout1>
  );
};

export async function getServerSideProps(context) {
  // Fetch data from external API
  const chiaKhoaCuaToi = context.req.cookies.mykey;
  const { data } = await fetchData.get("/about/chungtoi", {
    params: {
      chiaKhoa: chiaKhoaCuaToi,
    },
  });
  // Pass data to the page via props
  return { props: { kiemTraDangNhap: data } };
}
