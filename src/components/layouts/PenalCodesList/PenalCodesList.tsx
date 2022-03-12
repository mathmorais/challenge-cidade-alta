import { Card } from "../Card/Card";
import { PenalCodesFilters } from "../PenalCodesFilters/PenalCodesFilters";
import styled from "@emotion/styled";
import { Table } from "../Table/Table";

export interface IPenalCode {
	nome: string;
	descricao: string;
	dataCriacao: string;
	multa: number;
	tempoPrisao: number;
	status: number;
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
`;

const Container = styled.div`
	width: 100%;
	max-width: 960px;
`;

const columns = [
	{ field: "nome", headerName: "Nome", width: 70 },
	{ field: "descricao", headerName: "Descrição", width: 130 },
	{ field: "dataCriacao", headerName: "Data", width: 130 },
	{ field: "dataCriacao", headerName: "Data", width: 130 },
	{ field: "multa", headerName: "Multa", width: 130 },
	{ field: "tempoPrisao", headerName: "Tempo de prisão", width: 130 },
	{ field: "status", headerName: "Status", width: 130 },
];

const rows = [
	{
		id: 1,
		nome: "Desacato",
		descricao:
			"Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato",
		dataCriacao: "2021-04-29T01:26:35.700Z",
		multa: 501.2,
		tempoPrisao: 30,
		status: 1,
	},
];

export const PenalCodesList = () => {
	return (
		<Wrapper>
			<PenalCodesFilters />
			<Container>s
				<Card>
					<Table />
				</Card>
			</Container>
		</Wrapper>
	);
};
