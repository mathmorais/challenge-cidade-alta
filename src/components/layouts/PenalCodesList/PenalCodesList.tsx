import { Table, TableCell, TableRow } from "../Table/Table";
import { dateFormatter } from "utils/helpers/dateFormatter";
import { Status } from "../Status/Status";
import { Dropdown } from "components/buttons/Dropdown/Dropdown";
import { usePenalCodesList } from "hooks/usePenalCodesList";
import { useDispatch, useSelector } from "react-redux";
import { IPenalCode } from "interfaces/IPenalCode";
import { PenalCodesTableFilters } from "enums/PenalCodesTableFilters";
import { useEffect } from "react";
import { clearPenalCodesFilter } from "store/actions/penalCodesFilter.action";
import { Paragraphy } from "../Typography/Typography";
import { TableListNotFound } from "../TableListNotFound/TableListNotFound";

export const PenalCodesList = () => {
	const { columns, dropdownItems } = usePenalCodesList();
	const dispatch = useDispatch();
	const penalCodes = useSelector((store) => store.penalCodesReducer);
	const penalCodesFilter = useSelector(
		(store) => store.penalCodesFilterReducer
	);

	const handleFilters = (data: IPenalCode[]) => {
		switch (penalCodesFilter.filter) {
			case PenalCodesTableFilters.search:
				return data.filter((item) => {
					const searchFor = String(penalCodesFilter.value);
					const regex = new RegExp(searchFor, "i");

					return regex.test(item.nome);
				});
			default:
				return data;
		}
	};

	const filteredPenalCodes = handleFilters(penalCodes);

	useEffect(() => {
		dispatch(clearPenalCodesFilter());
	}, []);

	return (
		<Table columns={columns}>
			{filteredPenalCodes.length > 0 ? (
				filteredPenalCodes.map((penalCode) => (
					<TableRow key={penalCode.id}>
						<TableCell width="200px" bold>
							{penalCode.nome}
						</TableCell>
						<TableCell>{dateFormatter(penalCode.dataCriacao)}</TableCell>
						<TableCell>R${Math.floor(penalCode.multa)}</TableCell>
						<TableCell>{penalCode.tempoPrisao} meses</TableCell>
						<TableCell>
							<Status status={penalCode.status} />
						</TableCell>
						<TableCell>
							<Dropdown items={dropdownItems} />
						</TableCell>
					</TableRow>
				))
			) : (
				<TableRow>
					<TableCell>
						<TableListNotFound />
					</TableCell>
				</TableRow>
			)}
		</Table>
	);
};
