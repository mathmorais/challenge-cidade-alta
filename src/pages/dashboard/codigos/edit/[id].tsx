import { DashboardLayout } from "components/layouts/DashboardLayout/DashboardLayout";
import { ModifyTypes } from "components/layouts/PenalCodesModify/PenalCodesModify";
import { ModifyPenalCodesTemplate } from "components/templates/ModifyPenalCodesTemplate/ModifyPenalCodesTemplate";
import { LayoutNextPage } from "next";
import { useRouter } from "next/router";

const EditRegisterPage: LayoutNextPage = () => {
	const { query } = useRouter();

	return (
		<ModifyPenalCodesTemplate
			penalCodeId={String(query.id)}
			modifyType={ModifyTypes.edit}
		/>
	);
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
