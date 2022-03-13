import styled from "@emotion/styled";
import { typography } from "utils/constants/typography";
import { ButtonProps } from "./Button";

export const ButtonHelper = styled.button<ButtonProps>`
	display: flex;
	justify-content: center;
	padding: 10px 0;
	border-radius: 8px;
	display: flex;
	align-items: center;
	background: none;
	color: ${(props) => props.theme.neutral.black};
	border: none;
	cursor: pointer;
	font-size: ${typography.paragraphy.size};
	font-weight: 500;

	border-radius: ${(props) => props.rounded && "100%"};

	&:active {
		filter: opacity(0.8);
	}

	&:disabled {
		cursor: not-allowed;
	}
`;
