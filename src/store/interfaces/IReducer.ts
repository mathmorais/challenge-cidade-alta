import { IAction } from "./IAction";

export type IReducer<T, Y> = (state?: T, action?: IAction<Y>) => T;
