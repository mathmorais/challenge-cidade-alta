import { DashboardLayout } from "components/layouts/DashboardLayout/DashboardLayout";
import { ModifyTypes } from "components/layouts/PenalCodesModify/PenalCodesModify";
import { ModifyPenalCodesTemplate } from "components/templates/ModifyPenalCodesTemplate/ModifyPenalCodesTemplate";
import { LayoutNextPage } from "next";

const EditRegisterPage: LayoutNextPage = () => {
	return <ModifyPenalCodesTemplate modifyType={ModifyTypes.edit} />;
};

EditRegisterPage.getLayout = (page) => {
	return (
		<DashboardLayout
			redirectTo="/dashboard/codigos"
			contentTitle="Editar registro"
		>
			{page}
		</DashboardLayout>
	);
};

export default EditRegisterPage;
