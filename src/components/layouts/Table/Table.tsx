import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { typography } from "utils/constants/typography";

const Container = styled.table`
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;
`;

const TableHead = styled.thead`
	border: 2px solid ${(props) => props.theme.neutral[100]};
`;
const TableBody = styled.tbody``;

const TableData = css`
	padding: 25px;
	font-size: ${typography.span.size};
	line-height: ${typography.span.lineHeight};
`;

export const TableRow = styled.tr``;

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
	bold?: boolean;
};

export const TableCell = styled.td<CellStylesProps>`
	${TableData}
	text-align: ${(props) => props.align ?? "left"};
	font-weight: ${(props) => props.bold && "bold"};
`;

interface ITableColumn extends CellStylesProps {
	field: string;
	headerName: string;
}

export const Table: React.FC<{
	columns: ITableColumn[];
}> = ({ columns, children }) => {
	return (
		<Container>
			<TableHead>
				<TableRow>
					{columns.map((column, index) => (
						<TableCell key={index} as="th">
							{column.headerName}
						</TableCell>
					))}
				</TableRow>
			</TableHead>
			<TableBody>{children}</TableBody>
		</Container>
	);
};
