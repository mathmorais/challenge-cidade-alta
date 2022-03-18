import styled from "@emotion/styled";
import { Button } from "components/buttons/Button/Button";
import { Select } from "components/buttons/Select/Select";
import { Form } from "components/forms/Form/Form";
import { Input } from "components/forms/Input/Input";
import { TextArea } from "components/forms/TextArea/TextArea";
import { StatusContext } from "contexts/statusContext";
import { IPenalCode } from "interfaces/IPenalCode";
import { useRouter } from "next/router";
import {
	createRef,
	RefObject,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { useDispatch } from "react-redux";
import { addPenalCode, updatePenalCode } from "store/actions/penalCodes.action";
import { Card } from "../Card/Card";
import { v4 } from "uuid";

export enum ModifyTypes {
	edit,
	add,
}

const ButtonWrapper = styled.div`
	max-width: 400px;
`;

export const PenalCodesModify: React.FC<{
	type: ModifyTypes;
	initialValue?: IPenalCode;
}> = ({ type, initialValue }) => {
	const { status } = useContext(StatusContext);
	const nameFieldRef = createRef<HTMLInputElement>();
	const descriptionFieldRef = createRef<HTMLTextAreaElement>();
	const prisonTimeFieldRef = createRef<HTMLInputElement>();
	const fineFieldRef = createRef<HTMLInputElement>();
	const statusFieldRef = useRef<number>();
	const dispatch = useDispatch();
	const router = useRouter();

	useEffect(() => {
		handleSetInitialValue(nameFieldRef, initialValue?.nome);
		handleSetInitialValue(descriptionFieldRef, initialValue?.descricao);
		handleSetInitialValue(prisonTimeFieldRef, initialValue?.tempoPrisao);
		handleSetInitialValue(fineFieldRef, initialValue?.multa);
	}, []);

	const handleSetInitialValue = (
		inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement>,
		value: any
	) => {
		if (inputRef.current) {
			inputRef.current.value = value ?? "";
		}
	};

	const handleOnSubmit = () => {
		const penalCode = {
			id: v4(),
			nome: nameFieldRef.current?.value,
			descricao: descriptionFieldRef.current?.value,
			tempoPrisao: Number(prisonTimeFieldRef.current?.value),
			multa: Number(fineFieldRef.current?.value),
			status: statusFieldRef.current,
			dataCriacao: new Date().toISOString(),
		} as IPenalCode;

		if (type === ModifyTypes.edit && initialValue) {
			const { multa, nome, descricao, status, tempoPrisao } = penalCode;
			dispatch(
				updatePenalCode({
					id: initialValue.id,
					penalCode: { multa, nome, descricao, status, tempoPrisao },
				})
			);
			router.push(`/dashboard/codigos/${initialValue.id}`);
		} else {
			dispatch(addPenalCode(penalCode));
			router.push("/dashboard/codigos");
		}
	};

	return (
		<Card>
			<Form onSubmit={handleOnSubmit}>
				<Input
					required
					ref={nameFieldRef}
					label="Nome"
					value={nameFieldRef.current?.value}
					placeholder="Nome do código"
				/>
				<TextArea
					required
					ref={descriptionFieldRef}
					rows={20}
					value={descriptionFieldRef.current?.value}
					placeholder="Descreva informações sobre o código"
					label="Descrição"
				/>

				<Input
					required
					ref={prisonTimeFieldRef}
					label="Tempo"
					value={prisonTimeFieldRef.current?.value}
					placeholder={"Tempo em meses"}
					type="number"
				/>
				<Input
					required
					ref={fineFieldRef}
					label="Multa"
					value={fineFieldRef.current?.value}
					placeholder="Valor da multa"
					type="number"
				/>

				<Select
					onChange={(value) => {
						statusFieldRef.current = value;
					}}
					placeholder={"Selecione um status"}
					label="Status"
					items={{ ...status }}
					value={initialValue?.status ?? 1}
				/>
				<ButtonWrapper>
					<Button type="submit">
						{type === ModifyTypes.add ? "Criar registro" : "Salvar alterações"}
					</Button>
				</ButtonWrapper>
			</Form>
		</Card>
	);
};
