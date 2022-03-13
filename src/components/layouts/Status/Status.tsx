import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Paragraphy } from "../Typography/Typography";

const Container = styled.div<{ inactive?: boolean }>`
	width: 82px;
	height: 24px;
	text-align: center;
	background: ${(props) => props.theme.feedBackColors.success};
	border-radius: 100px;

	${(props) =>
		props.inactive &&
		css`
			background: ${props.theme.neutral[100]};
		`}
`;

export const Status: React.FC<{ status: number }> = ({ status }) => {
	const handleGetStatusText = () => {
		const statusTexts: { [key: number]: string } = {
			1: "Inativo",
			2: "Ativo",
		};

		return statusTexts[status] ?? "Desconhecido";
	};

	return (
		<Container inactive={status === 1}>
			<Paragraphy>{handleGetStatusText()}</Paragraphy>
		</Container>
	);
};
