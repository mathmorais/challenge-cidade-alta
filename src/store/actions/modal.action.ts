import { IAction } from "store/interfaces/IAction";
import { ModalActions } from "store/reducers/modal.reducer";

export const toogleModalAction = (): IAction<ModalActions> => ({
	type: ModalActions.toogle,
});
