import { createAction } from "@reduxjs/toolkit";
import { TableFilters } from "enums/PenalCodesTableFilters";

export const setPenalCodesFilter = createAction<{
	filter: TableFilters;
	value?:
		| string
		| number
		| {
				min: number;
				max: number;
		  };
}>("penalCodesFilter/set");

export const clearPenalCodesFilter = createAction("penalCodesFilter/clear");
