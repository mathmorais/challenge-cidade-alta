import styled from "@emotion/styled";
import { Form } from "components/forms/Form/Form";
import { Input } from "components/forms/Input/Input";
import { Card } from "components/layouts/Card/Card";
import { Modal } from "components/layouts/Modal/Modal";
import { PenalCodesFilters } from "components/layouts/PenalCodesFilters/PenalCodesFilters";
import { PenalCodesList } from "components/layouts/PenalCodesList/PenalCodesList";
import { PenalCodesTableFilters } from "enums/PenalCodesTableFilters";
import { createRef } from "react";
import { useDispatch } from "react-redux";
import { setPenalCodesFilter } from "store/actions/penalCodesFilter.action";
import { mediaQueries } from "utils/constants/mediaQueries";

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;

	${mediaQueries.breakpoint[0]} {
		flex-direction: column;
	}
`;

const Container = styled.div`
	width: 100%;
	max-width: 960px;
`;

const SearchFieldWrapper = styled.div`
	margin-bottom: 25px;
`;

export const PenalCodesTemplate: React.FC = () => {
	const dispatch = useDispatch();
	const searchFieldRef = createRef<HTMLInputElement>();

	const handleInputSearch = () => {
		dispatch(
			setPenalCodesFilter({
				filter: PenalCodesTableFilters.search,
				value: searchFieldRef.current?.value,
			})
		);
	};

	return (
		<Wrapper>
			<PenalCodesFilters />
			<Container>
				<Card>
					<SearchFieldWrapper>
						<Form onChange={handleInputSearch}>
							<Input
								ref={searchFieldRef}
								label="Pesquisar por"
								placeholder="Nome"
							/>
						</Form>
					</SearchFieldWrapper>
					<PenalCodesList />
				</Card>
				<Modal
					label="Tem certeza que deseja excluir?"
					onConfirmation={() => console.log("Handle modal confirmation")}
				/>
			</Container>
		</Wrapper>
	);
};
