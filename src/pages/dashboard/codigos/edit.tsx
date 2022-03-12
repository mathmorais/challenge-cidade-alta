import { DashboardLayout } from "components/layouts/DashboardLayout/DashboardLayout";
import { LayoutNextPage } from "next";

const EditRegisterPage: LayoutNextPage = () => {
	return <div></div>;
};

EditRegisterPage.getLayout = (page) => {
	return (
		<DashboardLayout contentTitle="Editar registro">{page}</DashboardLayout>
	);
};

export default EditRegisterPage;
