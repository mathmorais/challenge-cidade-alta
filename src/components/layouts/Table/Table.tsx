import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { typography } from "utils/constants/typography";

const Container = styled.table`
	border-collapse: collapse;
	border-spacing: 0;
`;

const TableHead = styled.thead`
	tr th {
		font-weight: bold;
	}
`;
const TableBody = styled.tbody``;

const TableData = css`
	padding: 25px;
	font-size: ${typography.span.size};
	line-height: ${typography.span.lineHeight};
`;

const Row = styled.tr``;

type CellAlign =
	| "start"
	| "end"
	| "left"
	| "right"
	| "center"
	| "justify"
	| "match-parent";

type CellStylesProps = {
	align?: CellAlign;
};

const Cell = styled.td<CellStylesProps>`
	${TableData}
	line-height: calc(${typography.span.lineHeight} + 1);
	text-align: ${(props) => props.align};
`;

interface ITableColumn extends CellStylesProps {
	field: string;
	headerName: string;
}

interface ITableRow extends Record<string, any>, CellStylesProps {
	id?: string | number;
}

export const Table: React.FC<{
	columns: ITableColumn[];
	rows: ITableRow[];
}> = ({ columns, rows }) => {
	return (
		<Container>
			<TableHead>
				<Row>
					{columns.map((column, index) => (
						<Cell key={index} as="th">
							{column.headerName}
						</Cell>
					))}
				</Row>
			</TableHead>
			<TableBody>
				<Row>
					<Cell>RowData</Cell>
				</Row>
			</TableBody>
		</Container>
	);
};
