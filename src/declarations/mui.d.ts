import { PaletteOptions } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
	export interface PaletteOptions {
		chip: {
			color: string;
			expandIcon: {
				background: string;
				color: string;
			};
		};
	}
}
