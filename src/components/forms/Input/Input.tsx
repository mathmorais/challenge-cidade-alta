import { forwardRef, InputHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { typography } from "../../../utils/constants/typography";
import { Span } from "../../layouts/Typography/Typography";
import { css } from "@emotion/react";
import { InputHelper } from "./Input.helper";
const DisabledInput = css`
	pointer-events: none;
`;

type InputStyleProps = {
	readOnly?: boolean;
};

export const Field = styled.input<InputStyleProps>`
	display: flex;
	align-items: center;
	position: absolute;
	width: 100%;
	height: 100%;
	overflow: hidden;
	padding: 16px 20px;
	border: none;
	background: none;
	z-index: 3;
	outline: none;
	color: ${(props) => props.theme.neutral.black};
	font-size: ${typography.paragraphy.size};
	font-weight: 500;
	inset: 2px 0 0 0;

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
	overflow: hidden;

	${Span} {
		padding: 0 4px;
		font-weight: 500;
		color: ${(props) => props.theme.neutral[300]};
	}
`;

type InputProps = {
	label: string;
	icon?: JSX.Element;
} & InputHTMLAttributes<HTMLInputElement> &
	InputStyleProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, readOnly, icon, ...props }, ref) => {
		return (
			<InputHelper>
				{icon && icon}
				<Field
					aria-disabled={readOnly}
					readOnly={readOnly}
					ref={ref}
					{...props}
				/>
				<Fieldset>
					<legend>
						<Span>{label}</Span>
					</legend>
				</Fieldset>
			</InputHelper>
		);
	}
);

Input.displayName = "Input";
