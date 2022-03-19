import { IPenalCode } from "interfaces/IPenalCode";
import { useSelector } from "react-redux";

export const useGetPenalCode = (id: IPenalCode["id"]) => {
	const { penalCodes } = useSelector((store) => store.penalCodes);

	return penalCodes.find((element) => element.id == id);
};
