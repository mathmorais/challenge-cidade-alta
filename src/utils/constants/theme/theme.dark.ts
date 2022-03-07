import { ITheme } from "./theme";

// To be created
export class ThemeDark implements ITheme {
  get neutral() {
    return {
      white: "#FFFFFF",
      black: "#2C2E32",
      100: "#D6DDE0",
      200: "#6F757E",
      300: "#51555B",
    };
  }

  get background() {
    return "#F8FAF9";
  }
}
