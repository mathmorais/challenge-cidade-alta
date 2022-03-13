import { DropdownItem } from "components/buttons/Dropdown/Dropdown";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { toogleModalAction } from "store/actions/modal.action";
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

	const dropdownItems: DropdownItem[] = [
		{
			action: () => push("/dashboard/codigos/1"),
			label: "Ver",
			icon: VisibilityIcon,
		},
		{
			action: () => push("/dashboard/codigos/edit/1"),
			label: "Editar",
			icon: EditIcon,
		},
		{
			action: () => dispatch(toogleModalAction()),
			label: "Excluir",
			icon: DeleteIcon,
		},
	];

	return { columns, dropdownItems };
};
