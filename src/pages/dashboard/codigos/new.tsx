import { LayoutNextPage } from "next";
import { DashboardLayout } from "components/layouts/DashboardLayout/DashboardLayout";
import { ModifyTypes } from "components/layouts/PenalCodesModify/PenalCodesModify";
import { ModifyPenalCodesTemplate } from "components/templates/ModifyPenalCodesTemplate/ModifyPenalCodesTemplate";

const NewRegisterPage: LayoutNextPage = () => {
	return <ModifyPenalCodesTemplate modifyType={ModifyTypes.add} />;
};

NewRegisterPage.getLayout = (page) => {
	return (
		<DashboardLayout
			redirectTo="/dashboard/codigos"
			contentTitle="Novo registro"
		>
			{page}
		</DashboardLayout>
	);
};

export default NewRegisterPage;
