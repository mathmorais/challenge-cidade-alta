import { Table, TableCell, TableRow } from "../Table/Table";
import { dateFormatter } from "utils/helpers/dateFormatter";
import { Status } from "../Status/Status";
import { Dropdown } from "components/buttons/Dropdown/Dropdown";
import { usePenalCodesList } from "hooks/usePenalCodesList";
import { useSelector } from "react-redux";
import { IPenalCode } from "interfaces/IPenalCode";
import { TableListNotFound } from "../TableListNotFound/TableListNotFound";
import { TableFilters } from "enums/PenalCodesTableFilters";

export const PenalCodesList = () => {
	const { columns, dropdownItems } = usePenalCodesList();
	const { penalCodes } = useSelector((store) => store.penalCodes);
	const { filter, value } = useSelector((store) => store.penalCodesFilter);

	const handleFilters = (data: IPenalCode[]) => {
		switch (filter) {
			case TableFilters.search:
				return data.filter((item) => {
					const searchFor = String(value);
					const regex = new RegExp(searchFor, "i");

					return regex.test(item.nome);
				});
			case TableFilters.date:
				return data.filter((item) => {
					console.log(item.dataCriacao);
					const timeStamp = new Date(item.dataCriacao).getTime();
					console.log("Table item " + timeStamp);
					console.log("Date value " + value);

					return timeStamp - Number(value || 0) >= 0;
				});
			case TableFilters.fine:
				return data.filter((item) => {
					if (typeof value === "object") {
						const { min, max } = value;
						const multa = Math.floor(item.multa);

						if (min === 0 || max === 0) return item;

						return multa >= min && multa <= max;
					}
				});
			default:
				return data;
		}
	};

	const filteredPenalCodes = handleFilters(penalCodes);

	return (
		<Table columns={columns}>
			{filteredPenalCodes.length > 0 ? (
				filteredPenalCodes.map((penalCode) => (
					<TableRow key={penalCode.id}>
						<TableCell width="200px" bold>
							{penalCode.nome}
						</TableCell>
						<TableCell>{dateFormatter(penalCode.dataCriacao)}</TableCell>
						<TableCell>R${penalCode.multa}</TableCell>
						<TableCell>{penalCode.tempoPrisao} meses</TableCell>
						<TableCell>
							<Status status={penalCode.status} />
						</TableCell>
						<TableCell>
							<Dropdown items={dropdownItems(penalCode.id)} />
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
