import styled from "@emotion/styled";

export const ButtonHelper = styled.button`
	display: flex;
	align-items: center;
	background: none;
	color: ${(props) => props.theme.neutral.black};
	border: none;
	cursor: pointer;

	&:active {
		filter: opacity(0.8);
		background: ${(props) => props.theme.background};
	}

	&:disabled {
		cursor: not-allowed;
	}
`;
