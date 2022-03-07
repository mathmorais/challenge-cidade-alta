import { DashboardLayout } from "components/layouts/DashboardLayout/DashboardLayout";
import { LayoutNextPage } from "next";

const RegisterPage: LayoutNextPage = () => {
  return <div></div>;
};

RegisterPage.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default RegisterPage;
