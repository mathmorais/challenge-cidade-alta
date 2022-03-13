import axios from "axios";
import { DashboardLayout } from "components/layouts/DashboardLayout/DashboardLayout";
import { PenalCodesTemplate } from "components/templates/PenalCodesTemplate/PenalCodesTemplate";
import { IPenalCode } from "interfaces/IPenalCode";
import { GetServerSideProps, LayoutNextPage } from "next";
import { useDispatch } from "react-redux";
import { setPenalCodesAction } from "store/actions/penalCodes.action";

type ServerSideDTO = {
	penalCodes: IPenalCode[];
};

const PenalCodesPage: LayoutNextPage<ServerSideDTO> = ({ penalCodes }) => {
	const dispatch = useDispatch();

	dispatch(setPenalCodesAction(penalCodes));

	return <PenalCodesTemplate />;
};

PenalCodesPage.getLayout = (page) => {
	return (
		<DashboardLayout contentTitle="Códigos Penais">{page}</DashboardLayout>
	);
};

export default PenalCodesPage;

export const getServerSideProps: GetServerSideProps<
	ServerSideDTO
> = async () => {
	const response = await axios.get<IPenalCode[]>(
		"https://my-json-server.typicode.com/cidadealta/exercise/codigopenal"
	);

	return {
		props: {
			penalCodes: response.data,
		},
	};
};
