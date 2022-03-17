import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StatusContext } from "contexts/statusContext";
import { useContext } from "react";
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
	const context = useContext(StatusContext);
	const currentStatus = context.status
		? context.status[status]
		: "Desconhecido";

	return (
		<Container inactive={currentStatus !== "Ativo"}>
			<Paragraphy>{currentStatus}</Paragraphy>
		</Container>
	);
};
