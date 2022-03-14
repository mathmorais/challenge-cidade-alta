import { PenalCodesTableFilters } from "enums/PenalCodesTableFilters";
import { IReducer } from "store/interfaces/IReducer";

export type PenalCodesFilterValue = {
	filter?: PenalCodesTableFilters;
	value?: string | number;
};

export enum PenalCodesFilterActions {
	set = "SET_PENALCODES_FILTER",
	clear = "CLEAR_PENALCODES_FILTER",
}
const INITIAL_STATE: PenalCodesFilterValue = {};

export const penalCodesFilterReducer: IReducer<
	typeof INITIAL_STATE,
	PenalCodesFilterActions
> = (state = INITIAL_STATE, action) => {
	if (state?.value !== action?.payload?.value) {
		switch (action?.type) {
			case PenalCodesFilterActions.set:
				return { filter: action.payload.filter, value: action.payload.value };
			case PenalCodesFilterActions.clear:
				return {};
			default:
				return state;
		}
	} else {
		return state;
	}
};
