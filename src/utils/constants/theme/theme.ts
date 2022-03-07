import { ThemeDark } from "./theme.dark";
import { ThemeLight } from "./theme.light";
type ThemeProps = {
  mode: "light" | "dark";
};

export interface ITheme {
  neutral: {
    white: string;
    black: string;
    100: string;
    200: string;
    300: string;
  };

  background: string;
}

export const theme = ({ mode }: ThemeProps) => {
  const themes = {
    light: new ThemeLight(),
    dark: new ThemeDark(),
  };

  return themes[mode];
};
