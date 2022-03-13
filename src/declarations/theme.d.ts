import { ITheme } from "../utils/constants/theme/theme";

declare module "@emotion/react" {
	export interface Theme extends ITheme {}
}
