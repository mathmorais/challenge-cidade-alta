import styled from "@emotion/styled";
import { ButtonHelper } from "../Button.helper";

export const ButtonFilled = styled(ButtonHelper)`
	background: ${(props) => props.theme.primary.default};
	color: ${(props) => props.theme.neutral.white};
`;
