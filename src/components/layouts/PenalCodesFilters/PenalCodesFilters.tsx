import styled from "@emotion/styled";
import { Button, ButtonDefault } from "components/buttons/Button/Button";

import { Form } from "components/forms/Form/Form";
import { Input } from "components/forms/Input/Input";
import { TableFilters } from "enums/PenalCodesTableFilters";
import { useRouter } from "next/router";
import {
	ChangeEvent,
	ChangeEventHandler,
	createRef,
	InputHTMLAttributes,
	RefObject,
	useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPenalCodesFilter } from "store/actions/penalCodesFilter.action";
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
	const dateFieldRef = createRef<HTMLInputElement>();
	const minFieldRef = createRef<HTMLInputElement>();
	const maxFieldRef = createRef<HTMLInputElement>();
	const dispatch = useDispatch();

	const clearInputRef = (ref: RefObject<HTMLInputElement>) => {
		if (ref.current && ref.current.value !== "") {
			ref.current.value = "";
		}
	};

	const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		clearInputRef(minFieldRef);
		clearInputRef(maxFieldRef);

		dispatch(
			setPenalCodesFilter({
				filter: TableFilters.date,
				value: event.currentTarget.valueAsNumber,
			})
		);
	};

	const handleValueFilterSubmit = () => {
		clearInputRef(dateFieldRef);

		dispatch(
			setPenalCodesFilter({
				filter: TableFilters.fine,
				value: {
					max: Number(maxFieldRef.current?.value),
					min: Number(minFieldRef.current?.value),
				},
			})
		);
	};

	useEffect(() => {
		clearInputRef(dateFieldRef);
		clearInputRef(maxFieldRef);
		clearInputRef(minFieldRef);
	}, []);

	return (
		<Wrapper>
			<Button onClick={() => push("/dashboard/codigos/new")} variation="filled">
				Novo Registro
			</Button>
			<Container>
				<Card>
					<Form onSubmit={handleValueFilterSubmit}>
						<Input
							ref={dateFieldRef}
							onChange={handleDateChange}
							type="date"
							label="Data"
						/>
						<InputWrapper>
							<Input
								ref={minFieldRef}
								min={0}
								type="number"
								placeholder="R$ Minimo"
								label="Minimo"
							/>
							<Input
								ref={maxFieldRef}
								min={minFieldRef.current?.value}
								type="number"
								placeholder="R$ Maximo"
								label="Maximo"
							/>
							<Button type="submit" rounded variation="filled">
								<ChevronRightIcon />
							</Button>
						</InputWrapper>
					</Form>
				</Card>
			</Container>
		</Wrapper>
	);
};
