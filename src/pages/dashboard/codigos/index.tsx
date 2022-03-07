import { DashboardLayout } from "components/layouts/DashboardLayout/DashboardLayout";
import { LayoutNextPage } from "next";

const RegistersPage: LayoutNextPage = () => {
  return <div></div>;
};

RegistersPage.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default RegistersPage;
