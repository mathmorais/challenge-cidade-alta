import { DashboardLayout } from "components/layouts/DashboardLayout/DashboardLayout";
import { LayoutNextPage } from "next";

const NewRegisterPage: LayoutNextPage = () => {
  return <div></div>;
};

NewRegisterPage.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default NewRegisterPage;
