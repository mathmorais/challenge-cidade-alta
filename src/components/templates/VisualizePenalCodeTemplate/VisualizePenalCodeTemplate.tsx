import { Card } from "components/layouts/Card/Card";
import { PenalCodeView } from "components/layouts/PenalCodeView/PenalCodeView";
import { Subtitle } from "components/layouts/Typography/Typography";
import { useGetPenalCode } from "hooks/useGetPenalCode";
import { IPenalCode } from "interfaces/IPenalCode";

export const VisualizePenalCodeTemplate: React.FC<{ id: IPenalCode["id"] }> = ({
	id,
}) => {
	const penalCode = useGetPenalCode(id);

	if (penalCode) {
		return <PenalCodeView penalCode={penalCode} />;
	} else {
		return (
			<Card>
				<Subtitle>Código penal não encontrado</Subtitle>
			</Card>
		);
	}
};
