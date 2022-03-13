import { DashboardLayout } from "components/layouts/DashboardLayout/DashboardLayout";
import { VisualizePenalCodeTemplate } from "components/templates/VisualizePenalCodeTemplate/VisualizePenalCodeTemplate";
import { LayoutNextPage } from "next";

const VisualizeRegisterPage: LayoutNextPage = () => {
	return <VisualizePenalCodeTemplate />;
};

VisualizeRegisterPage.getLayout = (page) => {
	return (
		<DashboardLayout
			redirectTo="/dashboard/codigos"
			contentTitle="Visualizar Código"
		>
			{page}
		</DashboardLayout>
	);
};

export default VisualizeRegisterPage;
