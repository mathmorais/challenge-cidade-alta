import { DropdownItem } from "components/buttons/Dropdown/Dropdown";
import { IPenalCode } from "interfaces/IPenalCode";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { toogleModalWithData } from "store/actions/modal.action";
import { DeleteIcon, EditIcon, VisibilityIcon } from "utils/constants/icons";

export const usePenalCodesList = () => {
	const { push } = useRouter();
	const dispatch = useDispatch();

	const columns = [
		{ field: "nome", headerName: "Nome" },
		{ field: "dataCriacao", headerName: "Data" },
		{ field: "multa", headerName: "Multa" },
		{ field: "tempoPrisao", headerName: "Tempo de prisão" },
		{ field: "status", headerName: "Status" },
	];

	const dropdownItems = (penalCodeId: IPenalCode["id"]): DropdownItem[] => [
		{
			action: () => push("/dashboard/codigos/" + penalCodeId),
			label: "Ver",
			icon: VisibilityIcon,
		},
		{
			action: () => push("/dashboard/codigos/edit/" + penalCodeId),
			label: "Editar",
			icon: EditIcon,
		},
		{
			action: () => dispatch(toogleModalWithData(penalCodeId)),
			label: "Excluir",
			icon: DeleteIcon,
		},
	];

	return { columns, dropdownItems };
};
