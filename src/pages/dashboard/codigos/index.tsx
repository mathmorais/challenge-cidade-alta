import axios from "axios";
import { DashboardLayout } from "components/layouts/DashboardLayout/DashboardLayout";
import { PenalCodesTemplate } from "components/templates/PenalCodesTemplate/PenalCodesTemplate";
import { IPenalCode } from "interfaces/IPenalCode";
import { GetStaticProps, LayoutNextPage } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPenalCodes } from "store/actions/penalCodes.action";

type ServerSideDTO = {
	penalCodes: IPenalCode[];
};

const PenalCodesPage: LayoutNextPage<ServerSideDTO> = ({ penalCodes }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setPenalCodes(penalCodes));
	}, []);

	return <PenalCodesTemplate />;
};

PenalCodesPage.getLayout = (page) => {
	return (
		<DashboardLayout contentTitle="Códigos Penais">{page}</DashboardLayout>
	);
};

export default PenalCodesPage;

export const getStaticProps: GetStaticProps<ServerSideDTO> = async () => {
	const url = process.env.API_URL;
	let data: IPenalCode[] = [];

	if (url) {
		const response = await axios.get<IPenalCode[]>(url);
		data = response.data;
	}

	return {
		props: {
			penalCodes: data,
		},

		revalidate: 60 * 10, // 10 minutes
	};
};
