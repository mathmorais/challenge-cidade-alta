import { createReducer } from "@reduxjs/toolkit";
import {
	toogleModalAction,
	toogleModalWithData,
} from "store/actions/modal.action";

type ModalState = { opened: boolean; data?: string | number };

const initialState = { opened: false } as ModalState;

export const modalReducer = createReducer(initialState, (builder) => {
	builder.addCase(toogleModalAction, (state) => {
		state.opened = !state.opened;
	});
	builder.addCase(toogleModalWithData, (state, action) => {
		(state.opened = !state.opened), (state.data = action.payload);
	});
});
