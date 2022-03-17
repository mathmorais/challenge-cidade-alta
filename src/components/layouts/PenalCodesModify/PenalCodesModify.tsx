import styled from "@emotion/styled";
import { Button } from "components/buttons/Button/Button";
import { Select } from "components/buttons/Select/Select";
import { Form } from "components/forms/Form/Form";
import { Input } from "components/forms/Input/Input";
import { TextArea } from "components/forms/TextArea/TextArea";
import { StatusContext } from "contexts/statusContext";
import { IPenalCode } from "interfaces/IPenalCode";
import { IStatus } from "interfaces/IStatus";
import { useContext } from "react";
import { Card } from "../Card/Card";

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

	const handleOnSubmit = () => {
		if (type === ModifyTypes.add) {
			console.log("Add action");
		} else {
			console.log("Modify action");
		}
	};

	return (
		<Card>
			<Form onSubmit={handleOnSubmit}>
				<Input
					value={initialValue?.nome}
					label="Nome"
					placeholder="Nome do código"
				/>
				<TextArea
					rows={20}
					value={initialValue?.descricao}
					placeholder="Descreva informações sobre o código"
					label="Descrição"
				/>

				<Input
					value={initialValue?.tempoPrisao}
					label="Tempo"
					placeholder="Tempo em meses"
					type="number"
				/>
				<Input
					value={initialValue?.multa}
					label="Multa"
					placeholder="Valor da multa"
					type="number"
				/>

				<Select
					value={initialValue?.status}
					placeholder="Selecione um status"
					label="Status"
					items={{ ...status }}
				/>
				<ButtonWrapper>
					<Button>
						{type === ModifyTypes.add ? "Criar registro" : "Salvar alterações"}
					</Button>
				</ButtonWrapper>
			</Form>
		</Card>
	);
};
