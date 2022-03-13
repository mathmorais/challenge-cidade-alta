import styled from "@emotion/styled";
import { ButtonHelper } from "../Button.helper";

export const ButtonFilled = styled(ButtonHelper)`
	display: flex;
	justify-items: center;
	width: 100%;
	background: ${(props) => props.theme.primary.default};
	color: ${(props) => props.theme.neutral.white};

	svg {
		fill: ${(props) => props.theme.neutral.white};
	}
`;
