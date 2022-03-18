import { createReducer } from "@reduxjs/toolkit";
import { TableFilters } from "enums/PenalCodesTableFilters";
import {
	clearPenalCodesFilter,
	setPenalCodesFilter,
} from "store/actions/penalCodesFilter.action";

export type PenalCodesFiltersState = {
	filter?: TableFilters;
	value?:
		| string
		| number
		| {
				min: number;
				max: number;
		  };
};

const initialState = {
	filter: TableFilters.none,
	value: "",
} as PenalCodesFiltersState;

export const penalCodesFilterReducer = createReducer(
	initialState,
	(builder) => {
		builder
			.addCase(setPenalCodesFilter, (state, action) => {
				state.filter = action.payload.filter;
				state.value = action.payload.value;
			})
			.addCase(clearPenalCodesFilter, (state) => {
				state.filter = TableFilters.none;
				state.value = "";
			});
	}
);
