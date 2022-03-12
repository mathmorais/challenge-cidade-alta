import styled from "@emotion/styled";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Paragraphy } from "components/layouts/Typography/Typography";
import { ButtonHelper } from "./Button.helper";

import { ButtonFilled } from "./variations/Button.filled";
import { ButtonTransparent } from "./variations/Button.transparent";

type Types = "circle" | "rounded";

type Variations = "default" | "filled" | "transparent";

type ButtonDefaultProps = {
	withIcon?: ReactNode;
	variation?: Variations;
	type?: Types;
} & ButtonAttributes;

export const ButtonDefault = styled(ButtonHelper)`
	display: flex;
	justify-content: center;
	align-items: center;
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

export const Button: React.FC<ButtonDefaultProps> = ({
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
			<Paragraphy>{children}</Paragraphy>
			{Icon && Icon}
		</ButtonComponent>
	);
};
