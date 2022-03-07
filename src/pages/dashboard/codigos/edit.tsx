import { DashboardLayout } from "components/layouts/DashboardLayout/DashboardLayout";
import { LayoutNextPage } from "next";

const EditRegisterPage: LayoutNextPage = () => {
  return <div></div>;
};

EditRegisterPage.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default EditRegisterPage;
