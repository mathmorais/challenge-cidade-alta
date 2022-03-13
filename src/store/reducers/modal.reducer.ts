import { IReducer } from "store/interfaces/IReducer";

export enum ModalActions {
	toogle = "TOOGLE_MODAL",
}

export type ModalValue = boolean;

const INITIAL_STATE: ModalValue = false;

export const modalReducer: IReducer<ModalValue, ModalActions> = (
	state = INITIAL_STATE,
	action
) => {
	switch (action?.type) {
		case ModalActions.toogle:
			return (state = !state);
		default:
			return state;
	}
};
