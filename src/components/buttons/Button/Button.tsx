import styled from "@emotion/styled";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Paragraphy } from "components/layouts/Typography/Typography";
import { ButtonHelper } from "./Button.helper";
import { ButtonFilled } from "./variations/Button.filled";
import { ButtonTransparent } from "./variations/Button.transparent";

type Variations = "default" | "filled" | "transparent";

export type ButtonProps = {
	withIcon?: ReactNode;
	variation?: Variations;
	rounded?: boolean;
} & ButtonAttributes;

export const ButtonDefault = styled(ButtonHelper)`
	width: 100%;
	padding: 10px;
	border-radius: 8px;
	color: ${(props) => props.theme.primary.default};
	border: 2px solid ${(props) => props.theme.primary.default};

	svg {
		margin: 5px;
	}
`;

export type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
	children,
	withIcon,
	variation,
	type,
	...props
}) => {
	const Icon = withIcon;
	const variations: { [K in Variations]: React.ComponentType } = {
		filled: ButtonFilled,
		transparent: ButtonTransparent,
		default: ButtonDefault,
	};

	const ButtonComponent = variations[variation ?? "default"];

	return (
		<ButtonComponent {...props}>
			{children}
			{Icon && Icon}
		</ButtonComponent>
	);
};
