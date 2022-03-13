import { IPenalCode } from "interfaces/IPenalCode";
import { IReducer } from "store/interfaces/IReducer";

export type PenalCodesValue = IPenalCode[];

const INITIAL_STATE: PenalCodesValue = [];

export enum PenalCodesActions {
	set = "SET_PENAL_CODES",
}

export const penalCodesReducer: IReducer<PenalCodesValue, PenalCodesActions> = (
	state = INITIAL_STATE,
	action
) => {
	switch (action?.type) {
		case PenalCodesActions.set:
			return [...action.payload];
		default:
			return state;
	}
};
