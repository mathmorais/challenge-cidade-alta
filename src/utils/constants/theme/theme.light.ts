import { ITheme } from "./theme";

export class ThemeLight implements ITheme {
	readonly primary = {
		default: "#446FA0",
		disabled: "#223C60",
	};

	readonly neutral = {
		white: "#FFFFFF",
		black: "#2C2E32",
		100: "#D6DDE0",
		200: "#6F757E",
		300: "#51555B",
	};

	readonly background = "#F8FAF9";
}
