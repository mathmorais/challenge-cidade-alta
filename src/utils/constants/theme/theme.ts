import { ThemeDark } from "./theme.dark";
import { ThemeLight } from "./theme.light";

type ThemeModes = "light" | "dark";

export interface ITheme {
	feedBackColors: {
		success: string;
	};

	primary: {
		default: string;
		disabled: string;
	};

	neutral: {
		white: string;
		black: string;
		100: string;
		200: string;
		300: string;
	};

	transparentBackground: string;
	background: string;
}

export const theme = (mode: ThemeModes) => {
	const themes = {
		light: new ThemeLight(),
		dark: new ThemeDark(),
	};

	return themes[mode];
};
