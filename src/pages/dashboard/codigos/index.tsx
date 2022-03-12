import { DashboardLayout } from "components/layouts/DashboardLayout/DashboardLayout";
import { PenalCodesList } from "components/layouts/PenalCodesList/PenalCodesList";
import { LayoutNextPage } from "next";

const PenalCodesPage: LayoutNextPage = () => {
	return <PenalCodesList />;
};

PenalCodesPage.getLayout = (page) => {
	return (
		<DashboardLayout contentTitle="Códigos Penais">{page}</DashboardLayout>
	);
};

export default PenalCodesPage;
