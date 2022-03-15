import styled from "@emotion/styled";
import { mediaQueries } from "utils/constants/mediaQueries";

type ContainerStyles = {
	withBackground?: boolean;
};

const Container = styled.div<ContainerStyles>`
	position: sticky;
	top: 0;
	display: flex;
	width: 100%;
	padding: 20px 50px;

	background: ${(props) => props.withBackground && props.theme.neutral.black};

	svg {
		fill: ${(props) => props.theme.neutral.white};
	}

	${mediaQueries.breakpoint[0]} {
		padding: 20px 15px;
	}
`;

export const Header: React.FC<ContainerStyles> = ({ children, ...props }) => {
	return <Container {...props}>{children}</Container>;
};
