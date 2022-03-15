import styled from "@emotion/styled";
import { Button, ButtonDefault } from "components/buttons/Button/Button";

import { Form } from "components/forms/Form/Form";
import { Input } from "components/forms/Input/Input";
import { useRouter } from "next/router";
import { ChevronRightIcon } from "utils/constants/icons";
import { mediaQueries } from "utils/constants/mediaQueries";
import { Card } from "../Card/Card";

const Wrapper = styled.section`
	width: 100%;
	max-width: 440px;
	flex-shrink: 2;
	height: 200px;

	& > button {
		margin-bottom: 25px;
	}

	${mediaQueries.breakpoint[0]} {
		max-width: none;
		height: initial;
	}
`;

const Container = styled.div``;

const InputWrapper = styled.div`
	width: 100%;

	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: center;

	button {
		width: 100px;
		height: 40px;
	}
`;

export const PenalCodesFilters = () => {
	const { push } = useRouter();

	return (
		<Wrapper>
			<Button onClick={() => push("/dashboard/codigos/new")} variation="filled">
				Novo Registro
			</Button>
			<Container>
				<Card>
					<Form>
						<Input type="date" label="Data" />
						<InputWrapper>
							<Input placeholder="R$ Minimo" label="Minimo" />
							<Input placeholder="R$ Maximo" label="Maximo" />
							<Button rounded variation="filled">
								<ChevronRightIcon />
							</Button>
						</InputWrapper>
					</Form>
				</Card>
			</Container>
		</Wrapper>
	);
};
