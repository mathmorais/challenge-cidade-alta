import styled from "@emotion/styled";
import { Button } from "components/buttons/Button/Button";
import { Form } from "components/forms/Form/Form";
import { Input } from "components/forms/Input/Input";
import { ChevronRightIcon } from "utils/constants/icons";
import { Card } from "../Card/Card";

const Wrapper = styled.section`
	width: 100%;
	max-width: 440px;
	flex-shrink: 2;

	button:first-of-type {
		margin-bottom: 25px;
	}
`;

const Container = styled.div``;

const InputWrapper = styled.div`
	width: 100%;

	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: center;
`;

export const PenalCodesFilters = () => {
	return (
		<Wrapper>
			<Button variation="filled">Novo Registro</Button>
			<Container>
				<Card>
					<Form>
						<Input type="date" label="Data" />
						<InputWrapper>
							<Input label="Minimo" />
							<Input label="Maximo" />
							<Button>
								<ChevronRightIcon />
							</Button>
						</InputWrapper>
					</Form>
				</Card>
			</Container>
		</Wrapper>
	);
};
