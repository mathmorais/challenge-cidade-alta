import styled from "@emotion/styled";
import { Modal } from "components/layouts/Modal/Modal";
import { PenalCodesFilters } from "components/layouts/PenalCodesFilters/PenalCodesFilters";
import { PenalCodesList } from "components/layouts/PenalCodesList/PenalCodesList";

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
`;

const Container = styled.div`
	width: 100%;
	max-width: 960px;
`;

export const PenalCodesTemplate: React.FC = () => {
	return (
		<Wrapper>
			<PenalCodesFilters />
			<Container>
				<PenalCodesList />
				<Modal
					label="Tem certeza que deseja excluir?"
					onConfirmation={() => console.log("Handle modal confirmation")}
				/>
			</Container>
		</Wrapper>
	);
};
