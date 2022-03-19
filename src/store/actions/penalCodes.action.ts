import { createAction } from "@reduxjs/toolkit";
import { IPenalCode } from "interfaces/IPenalCode";

export const setPenalCodes = createAction<IPenalCode[]>("penalCodes/set");
export const addPenalCode = createAction<IPenalCode>("penalCodes/add");
export const updatePenalCode = createAction<{
	id: IPenalCode["id"];
	penalCode: Omit<IPenalCode, "id" | "dataCriacao">;
}>("penalCodes/update");
export const removePenalCode =
	createAction<IPenalCode["id"]>("penalCodes/remove");
