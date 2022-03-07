import { ITheme } from "../utils/constants/theme/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
