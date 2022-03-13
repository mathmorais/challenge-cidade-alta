import { IUser } from "interfaces/IUser";
import Image from "next/image";
import styled from "@emotion/styled";
import { Span } from "../Typography/Typography";

const Container = styled.div`
	display: flex;
	align-items: center;
	margin-left: auto;
`;

const Photo = styled.div`
	width: 40px;
	height: 40px;
	position: relative;
	border-radius: 100%;
	overflow: hidden;
	margin-right: 8px;
`;

export const Profile: React.FC<{ user: IUser }> = ({ user }) => {
	return (
		<Container>
			<Photo>
				<Image alt={user.fullName} src={user.photoUrl} layout="fill" />
			</Photo>
			<Span>{user.fullName}</Span>
		</Container>
	);
};
