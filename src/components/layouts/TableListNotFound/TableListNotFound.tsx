import styled from "@emotion/styled";
import { Paragraphy } from "../Typography/Typography";

const Container = styled.div`
	${Paragraphy} {
		font-weight: light;
	}
`;

export const TableListNotFound = () => {
	return (
		<Container>
			<Paragraphy>Nenhum dado encontrado</Paragraphy>
		</Container>
	);
};
