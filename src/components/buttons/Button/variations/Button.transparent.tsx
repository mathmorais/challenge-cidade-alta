import styled from "@emotion/styled";

import { ButtonHelper } from "../Button.helper";

export const ButtonTransparent = styled(ButtonHelper)`
	display: flex;
	justify-items: center;
	width: 100%;
	background: none;
	&:hover {
		background: none;
	}
`;
