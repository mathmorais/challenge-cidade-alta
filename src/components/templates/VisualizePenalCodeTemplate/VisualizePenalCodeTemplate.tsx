import styled from "@emotion/styled";
import { PenalCodeView } from "components/layouts/PenalCodeView/PenalCodeView";
import { IPenalCode } from "interfaces/IPenalCode";

export const VisualizePenalCodeTemplate: React.FC = () => {
	const mockedPenalCode: IPenalCode = {
		id: 1,
		nome: "Desacato",
		descricao:
			"Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato",
		dataCriacao: "2021-04-29T01:26:35.700Z",
		multa: 501.2,
		tempoPrisao: 30,
		status: 1,
	};

	return <PenalCodeView penalCode={mockedPenalCode} />;
};
