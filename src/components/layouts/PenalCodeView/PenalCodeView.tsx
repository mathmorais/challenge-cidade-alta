import styled from "@emotion/styled";
import { Input } from "components/forms/Input/Input";
import { IPenalCode } from "interfaces/IPenalCode";
import { dateFormatter } from "utils/helpers/dateFormatter";
import { Card } from "../Card/Card";
import { Status } from "../Status/Status";
import { Paragraphy, Subtitle } from "../Typography/Typography";

const Content = styled.section`
	${Subtitle} {
		margin: 25px 0;
	}
`;

const InfoRow = styled.div`
	width: 100%;
	display: inline-flex;
	gap: 50px;
`;

const InfoCard = styled.div`
	display: flex;
	height: 94px;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	min-width: 160px;
	padding: 15px;
	border: 2px solid ${(props) => props.theme.neutral[100]};
	border-radius: 5px;
`;

export const PenalCodeView: React.FC<{ penalCode: IPenalCode }> = ({
	penalCode,
}) => {
	return (
		<Card>
			<Content>
				<InfoRow>
					<Input label="Nome" value={penalCode.nome} readOnly />
					<Input
						label="Data"
						value={dateFormatter(penalCode.dataCriacao)}
						readOnly
					/>
				</InfoRow>
				<Subtitle>Descrição</Subtitle>
				<Paragraphy>{penalCode.descricao}</Paragraphy>
				<Subtitle>Informações</Subtitle>
				<InfoRow>
					<InfoCard>
						<Paragraphy>Tempo</Paragraphy>
						<Paragraphy>{penalCode.tempoPrisao} meses</Paragraphy>
					</InfoCard>
					<InfoCard>
						<Paragraphy>Multa</Paragraphy>
						<Paragraphy>R${penalCode.multa}</Paragraphy>
					</InfoCard>
					<InfoCard>
						<Paragraphy>Status</Paragraphy>
						<Status status={penalCode.status} />
					</InfoCard>
				</InfoRow>
			</Content>
		</Card>
	);
};
