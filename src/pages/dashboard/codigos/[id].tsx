import { DashboardLayout } from "components/layouts/DashboardLayout/DashboardLayout";
import { VisualizePenalCodeTemplate } from "components/templates/VisualizePenalCodeTemplate/VisualizePenalCodeTemplate";
import { LayoutNextPage } from "next";
import { useRouter } from "next/router";

const VisualizeRegisterPage: LayoutNextPage = () => {
	const { query } = useRouter();

	return <VisualizePenalCodeTemplate id={String(query.id)} />;
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
