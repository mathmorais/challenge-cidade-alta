import {
	ModifyTypes,
	PenalCodesModify,
} from "components/layouts/PenalCodesModify/PenalCodesModify";
import { IPenalCode } from "interfaces/IPenalCode";

export const ModifyPenalCodesTemplate: React.FC<{
	modifyType: ModifyTypes;
	serverSideInitialValue?: IPenalCode;
}> = ({ modifyType, serverSideInitialValue }) => {
	return (
		<PenalCodesModify type={modifyType} initialValue={serverSideInitialValue} />
	);
};
