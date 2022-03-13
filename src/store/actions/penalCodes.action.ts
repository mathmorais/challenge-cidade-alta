import { IPenalCode } from "interfaces/IPenalCode";
import { IAction } from "store/interfaces/IAction";
import { PenalCodesActions } from "store/reducers/penalCodes.reducer";

export const setPenalCodesAction = (
	payload: IPenalCode[]
): IAction<PenalCodesActions> => ({
	type: PenalCodesActions.set,
	payload: payload,
});
