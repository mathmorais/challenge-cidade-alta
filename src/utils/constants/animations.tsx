import { css } from "@emotion/react";
import { FadeInKeyframes } from "styles/Keyframes";

export const animations = new (class Animations {
	get FadeIn() {
		return css`
			animation: ${FadeInKeyframes} 100ms ease-in-out 0s 1 normal forwards;
		`;
	}
})();
