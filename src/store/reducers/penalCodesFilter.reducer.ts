import { PenalCodesFilters } from "enums/PenalCodesFilters";
import { IReducer } from "store/interfaces/IReducer";

export type PenalCodesFilterValue = {
	filter?: PenalCodesFilters;
	value?: string | number;
};

export enum PenalCodesFilterActions {
	set = "SET_PENAL_CODES_FILTER",
}
const INITIAL_STATE: PenalCodesFilterValue = {};

export const penalCodesFilterReducer: IReducer<
	typeof INITIAL_STATE,
	PenalCodesFilterActions
> = (state = INITIAL_STATE, action) => {
	switch (action?.type) {
		case PenalCodesFilterActions.set:
			return { filter: action.payload.filter, value: action.payload.value };
		default:
			return state;
	}
};
