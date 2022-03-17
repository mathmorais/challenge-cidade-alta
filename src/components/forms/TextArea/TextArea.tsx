import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Span } from "components/layouts/Typography/Typography";
import { forwardRef, TextareaHTMLAttributes } from "react";
import { typography } from "utils/constants/typography";
import { InputHelper } from "../Input/Input.helper";

const Container = styled(InputHelper)`
	height: 170px;
	overflow: hidden;
`;

type TextAreaStyleProps = {
	readOnly?: boolean;
};

const DisabledInput = css`
	pointer-events: none;
`;

const TextAreaField = styled.textarea`
	resize: none;
	display: flex;
	align-items: center;
	position: absolute;
	width: 100%;
	height: 100%;
	border: none;
	background: none;
	z-index: 3;
	outline: none;
	color: ${(props) => props.theme.neutral.black};
	font-size: ${typography.paragraphy.size};
	font-weight: 500;
	overflow: scroll;
	inset: 5px 0 0 0;
	padding: 16px 20px;

	${(props) => props.readOnly && DisabledInput}

	&:focus + fieldset {
		border-color: ${(props) => props.theme.neutral.black};
	}

	::placeholder {
		color: ${(props) => props.theme.neutral[200]};
		opacity: 1;
	}
`;

const Fieldset = styled.fieldset`
	position: absolute;
	inset: -5px 0 0 0;
	border: 2px solid ${(props) => props.theme.neutral[200]};
	border-radius: 8px;
	background: none;
	padding: 0 12px;

	${Span} {
		padding: 0 4px;
		font-weight: 500;
		color: ${(props) => props.theme.neutral[300]};
	}
`;

type TextAreaProps = {
	label: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement> &
	TextAreaStyleProps;

export const TextArea: React.FC<TextAreaProps> = forwardRef<
	HTMLTextAreaElement,
	TextAreaProps
>(({ label, ...props }, ref) => {
	return (
		<Container>
			<TextAreaField ref={ref} {...props} />
			<Fieldset>
				<legend>
					<Span>{label}</Span>
				</legend>
			</Fieldset>
		</Container>
	);
});

TextArea.displayName = "TextArea";
