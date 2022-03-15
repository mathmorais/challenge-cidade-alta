import styled from "@emotion/styled";
import { mediaQueries } from "utils/constants/mediaQueries";
import { ExtraTitle } from "../Typography/Typography";

const ContainerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	background: ${(props) => props.theme.background};
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	overflow: auto;
	display: flex;
	justify-content: center;
	align-items: center;

	${ExtraTitle} {
		margin-bottom: 5px;
	}
`;

const Main = styled.div`
	display: flex;
	width: 100%;
	max-width: 520px;

	${mediaQueries.breakpoint[0]} {
		margin: 0 15px;
	}
`;

export const AuthLayout: React.FC = ({ children }) => {
	return (
		<ContainerWrapper>
			<Container>
				<Main>{children}</Main>
			</Container>
		</ContainerWrapper>
	);
};
