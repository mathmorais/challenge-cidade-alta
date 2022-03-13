import { combineReducers, createStore } from "@reduxjs/toolkit";
import { IReducer } from "./interfaces/IReducer";
import { modalReducer, ModalValue } from "./reducers/modal.reducer";
import {
	penalCodesReducer,
	PenalCodesValue,
} from "./reducers/penalCodes.reducer";
import {
	penalCodesFilterReducer,
	PenalCodesFilterValue,
} from "./reducers/penalCodesFilter.reducer";

export interface RootState {
	modalReducer: ModalValue;
	penalCodesReducer: PenalCodesValue;
	penalCodesFilterReducer: PenalCodesFilterValue;
}

export const combinedReducers = combineReducers({
	modalReducer,
	penalCodesReducer,
	penalCodesFilterReducer,
} as { [key in keyof RootState]: IReducer<any, any> });

export const store = createStore(combinedReducers);
