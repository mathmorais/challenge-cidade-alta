import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { GavelIcon, LogoutIcon, PoliceIcon } from "utils/constants/icons";

const Container = styled.aside`
	display: flex;
	align-items: center;
	flex-direction: column;

	width: 68px;
	height: 100%;
	background: ${(props) => props.theme.neutral.white};
	padding: 25px 0;
`;

const IconHelper = styled.div`
	display: flex;
	align-items: center;

	svg {
		width: 100%;
		height: auto;
		fill: ${(props) => props.theme.neutral.black};
	}
`;

const Logo = styled.div`
	display: flex;
	margin-bottom: 50px;
	width: 52px;
	height: 52px;
`;

const Logout = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: auto;
	width: 44px;
	height: 44px;
	background: ${(props) => props.theme.neutral.black};
	border-radius: 100%;
	cursor: pointer;

	&:hover {
	}

	svg path {
		fill: ${(props) => props.theme.neutral.white};
	}
`;

const Item = styled.button<{ selected: boolean }>`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 32px;
	padding: 0 13px;
	cursor: pointer;
	margin-bottom: 25px;

	${(props) =>
		props.selected &&
		css`
			svg {
				fill: ${props.theme.neutral.white};
			}
		`};
`;

export const Sidebar: React.FC = () => {
	const { pathname, push } = useRouter();

	const items = [
		{
			name: "codigos",
			icon: <GavelIcon />,
			action: () => push("/dashboard/codigos"),
			selected: pathname.includes("codigos"),
		},
	];

	const handleSerializeItems = () => {
		return items.map((item, index) => (
			<Item
				selected={pathname.includes(item.name)}
				onClick={item.action}
				key={index}
			>
				<IconHelper>{item.icon}</IconHelper>
			</Item>
		));
	};

	const handleLogout = () => {
		push("/");
	};

	return (
		<Container>
			<Logo>
				<IconHelper>
					<PoliceIcon />
				</IconHelper>
			</Logo>
			{handleSerializeItems()}
			<Logout onClick={handleLogout}>
				<IconHelper>
					<LogoutIcon />
				</IconHelper>
			</Logout>
		</Container>
	);
};
