import { createAction } from "@reduxjs/toolkit";

export const toogleModalAction = createAction("modal/toogle");

export const toogleModalWithData = createAction<string | number>(
	"modal/toogleWithData"
);
