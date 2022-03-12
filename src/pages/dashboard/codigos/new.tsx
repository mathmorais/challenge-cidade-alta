import { DashboardLayout } from "components/layouts/DashboardLayout/DashboardLayout";
import { LayoutNextPage } from "next";

const NewRegisterPage: LayoutNextPage = () => {
	return <div></div>;
};

NewRegisterPage.getLayout = (page) => {
	return <DashboardLayout contentTitle="Novo registro">{page}</DashboardLayout>;
};

export default NewRegisterPage;
