import { IAction } from "store/interfaces/IAction";
import {
	PenalCodesFilterActions,
	PenalCodesFilterValue,
} from "store/reducers/penalCodesFilter.reducer";

export const setPenalCodesFilter = (
	payload: PenalCodesFilterValue
): IAction<PenalCodesFilterActions> => ({
	type: PenalCodesFilterActions.set,
	payload: payload,
});
