import styled from "@emotion/styled";
import { Button } from "components/buttons/Button/Button";
import { Form } from "components/forms/Form/Form";
import { Input } from "components/forms/Input/Input";
import { TextArea } from "components/forms/TextArea/TextArea";
import { IPenalCode } from "interfaces/IPenalCode";
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
				<Input
					value={initialValue?.status}
					label="Status"
					placeholder="Status inicial do codigo"
					type={"number"}
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
