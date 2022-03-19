import { createReducer } from "@reduxjs/toolkit";
import { IPenalCode } from "interfaces/IPenalCode";
import {
	addPenalCode,
	removePenalCode,
	setPenalCodes,
	updatePenalCode,
} from "store/actions/penalCodes.action";

type PenalCodesState = {
	penalCodes: IPenalCode[];
};

const initialState = { penalCodes: [] } as PenalCodesState;

export const penalCodesReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(setPenalCodes, (state, action) => {
			if (state.penalCodes.length <= 0) {
				const penalCodes = action.payload;
				state.penalCodes = penalCodes;
			}
		})
		.addCase(updatePenalCode, (state, action) => {
			const penalCodeIndex = state.penalCodes.findIndex(
				(code) => code.id === action.payload.id
			);
			state.penalCodes[penalCodeIndex] = {
				...state.penalCodes[penalCodeIndex],
				...action.payload.penalCode,
			};
		})
		.addCase(addPenalCode, (state, action) => {
			state.penalCodes.push({ ...action.payload });
		})
		.addCase(removePenalCode, (state, action) => {
			const penalCodeId = action.payload;
			state.penalCodes = state.penalCodes.filter(
				(code) => code.id !== penalCodeId
			);
		});
});
