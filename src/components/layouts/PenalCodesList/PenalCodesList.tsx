import { useEffect } from "react";
import { Card } from "../Card/Card";
import { Table, TableCell, TableRow } from "../Table/Table";
import { dateFormatter } from "utils/helpers/dateFormatter";
import { Status } from "../Status/Status";
import { Dropdown } from "components/buttons/Dropdown/Dropdown";
import { usePenalCodesList } from "hooks/usePenalCodesList";
import { useSelector } from "react-redux";

export const PenalCodesList = () => {
	const { columns, dropdownItems } = usePenalCodesList();
	const penalCodes = useSelector((store) => store.penalCodesReducer);
	const penalCodesFilter = useSelector(
		(store) => store.penalCodesFilterReducer
	);

	useEffect(() => {
		console.log(penalCodesFilter);
	}, [penalCodesFilter]);

	return (
		<Card>
			<Table columns={columns}>
				{penalCodes.map((row) => (
					<TableRow key={row.id}>
						<TableCell bold>{row.nome}</TableCell>
						<TableCell>{dateFormatter(row.dataCriacao)}</TableCell>
						<TableCell>R${Math.floor(row.multa)}</TableCell>
						<TableCell>{row.tempoPrisao} meses</TableCell>
						<TableCell>
							<Status status={row.status} />
						</TableCell>
						<TableCell>
							<Dropdown items={dropdownItems} />
						</TableCell>
					</TableRow>
				))}
			</Table>
		</Card>
	);
};
