import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./reducers/modal.reducer";
import { penalCodesReducer } from "./reducers/penalCodes.reducer";
import { penalCodesFilterReducer } from "./reducers/penalCodesFilter.reducer";

const reducers = {
	penalCodes: penalCodesReducer,
	penalCodesFilter: penalCodesFilterReducer,
	modal: modalReducer,
};

export const store = configureStore({
	reducer: reducers,
	devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
