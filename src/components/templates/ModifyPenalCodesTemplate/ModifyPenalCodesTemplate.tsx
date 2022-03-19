import {
	ModifyTypes,
	PenalCodesModify,
} from "components/layouts/PenalCodesModify/PenalCodesModify";
import { useGetPenalCode } from "hooks/useGetPenalCode";
import { IPenalCode } from "interfaces/IPenalCode";

export const ModifyPenalCodesTemplate: React.FC<{
	modifyType: ModifyTypes;
	penalCodeId?: IPenalCode["id"];
}> = ({ modifyType, penalCodeId }) => {
	const penalCode = useGetPenalCode(penalCodeId ?? 0);

	return penalCode ? (
		<PenalCodesModify type={modifyType} initialValue={penalCode} />
	) : (
		<PenalCodesModify type={modifyType} />
	);
};
