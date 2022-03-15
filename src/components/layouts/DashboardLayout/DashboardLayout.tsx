import styled from "@emotion/styled";
import { ButtonFilled } from "components/buttons/Button/variations/Button.filled";
import { IUser } from "interfaces/IUser";
import { useRouter } from "next/router";
import { ChevronLeftIcon } from "utils/constants/icons";
import { mediaQueries } from "utils/constants/mediaQueries";
import { Header } from "../Header/Header";
import { Profile } from "../Profile/Profile";
import { Sidebar } from "../Sidebar/Sidebar";
import { Title } from "../Typography/Typography";

const Container = styled.div`
	display: flex;
	height: 100vh;
	width: 100%;
	overflow: hidden;
`;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	overflow: auto;
	background: ${(props) => props.theme.background};
`;

const ContentTitleWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 25px;

	button {
		margin-right: 8px;
		width: 36px;
		height: 36px;
	}
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

type DashboardLayoutProps = {
	contentTitle?: string;
	redirectTo?: string;
};

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
	children,
	contentTitle,
	redirectTo,
}) => {
	const { push } = useRouter();
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
						{redirectTo && (
							<ButtonFilled onClick={() => push(redirectTo)} rounded>
								<ChevronLeftIcon />
							</ButtonFilled>
						)}
						<Title>{contentTitle}</Title>
					</ContentTitleWrapper>
					<Frame>{children}</Frame>
				</Content>
			</Main>
		</Container>
	);
};
