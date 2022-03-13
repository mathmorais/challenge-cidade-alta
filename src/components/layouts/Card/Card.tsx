import { ReactNode } from "react";
import styled from "@emotion/styled";
import { animations } from "utils/constants/animations";
import { shadows } from "utils/constants/shadows";
import { ExtraTitle } from "../Typography/Typography";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 25px;
`;

const Body = styled.div`
	width: 100%;
	height: 100%;

	padding: 25px;
	background: ${(props) => props.theme.neutral.white};
	border-radius: 8px;
	box-shadow: ${shadows.level1};
	${animations.FadeIn}
`;

type Card = {
	title?: string;
	append?: ReactNode | ReactNode[];
};

export const Card: React.FC<Card> = ({ children, title, append }) => {
	return (
		<Wrapper>
			{title && <ExtraTitle>{title}</ExtraTitle>}
			<Body>{children}</Body>
			{append}
		</Wrapper>
	);
};
