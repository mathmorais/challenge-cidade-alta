import { css } from "@emotion/react";

export const GlobalStyle = css`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	html,
	body {
		font-size: 62.5%;
	}

	body,
	input,
	textarea,
	select,
	button {
		font: 400 1rem "Poppins", sans-serif;
	}

	button {
		border: none;
		background: none;
		cursor: pointer;
		transition: filter 0.1s ease-in;

		&:hover {
			filter: opacity(0.8);
		}
	}
`;
