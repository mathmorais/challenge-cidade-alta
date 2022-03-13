import { ITheme } from "./theme";

// To be created
export class ThemeDark implements ITheme {
	readonly feedBackColors = { success: "" };

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

	readonly transparentBackground = "rgb(44, 46, 50, 0.2)";

	readonly background = "#F8FAF9";
}
