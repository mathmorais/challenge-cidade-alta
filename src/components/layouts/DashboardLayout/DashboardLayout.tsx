import styled from "@emotion/styled";
import { IUser } from "interfaces/IUser";
import { Header } from "../Header/Header";
import { Profile } from "../Profile/Profile";
import { Sidebar } from "../Sidebar/Sidebar";
import { Title } from "../Typography/Typography";

const Container = styled.div`
	display: flex;
	height: 100vh;
	width: 100%;
	${(props) => props.theme.neutral.black}
	background: ${(props) => props.theme.background};
`;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const ContentTitleWrapper = styled.div`
	display: flex;
	margin-bottom: 25px;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 15px;
`;

const Frame = styled.div`
	display: flex;
	flex-direction: column;
`;

export const DashboardLayout: React.FC<{ contentTitle?: string }> = ({
	children,
	contentTitle,
}) => {
	const mockedUser: IUser = {
		fullName: "John Scott",
		user: "johnScott",
		photoUrl: "/pngs/userPhoto.png",
	};

	return (
		<Container>
			<Sidebar />
			<Main>
				<Header>
					<Profile user={mockedUser} />
				</Header>
				<Content>
					<ContentTitleWrapper>
						<Title>{contentTitle}</Title>
					</ContentTitleWrapper>
					<Frame>{children}</Frame>
				</Content>
			</Main>
		</Container>
	);
};
