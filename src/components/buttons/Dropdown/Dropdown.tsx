import styled from "@emotion/styled";
import { ComponentType, ReactNode, useState } from "react";
import { css } from "@emotion/react";
import { shadows } from "utils/constants/shadows";
import { Span } from "components/layouts/Typography/Typography";
import { ButtonHelper } from "../Button/Button.helper";
import { Button } from "../Button/Button";
import { MoreIcon } from "utils/constants/icons";

const Wrapper = styled.div`
	position: relative;
`;

const Content = styled.div`
	display: flex;
	position: absolute;
	right: 0px;

	flex-direction: column;

	width: 340px;
	transform: translate(150, 50, 0);
	padding: 8px;
	border-radius: 8px;
	box-shadow: ${shadows.level2};
	background: ${(props) => props.theme.neutral.white};
`;

const Item = styled(ButtonHelper)<{ enabled: boolean }>`
	width: 100%;
	justify-content: start;
	gap: 16px;
	padding: 17px;
	&:hover {
		background: ${(props) => props.theme.neutral[100]};
	}

	svg {
		z-index: 0;
	}

	svg {
		fill: ${(props) => props.theme.neutral[200]};
	}

	${Span} {
		font-weight: 500;
		color: ${(props) => props.theme.neutral.black};
	}

	${(props) =>
		!props.enabled &&
		css(`
		cursor: not-allowed;

		svg path {
		fill: ${props.theme.neutral[100]};

		${Span} {
		color: ${props.theme.neutral[100]};
		}		
	`)};
`;

export type DropdownItem = {
	enabled?: boolean;
	icon?: ComponentType;
	label: string;
	action: () => void;
};

export const Dropdown: React.FC<{ items: DropdownItem[] }> = ({ items }) => {
	const [active, setActive] = useState<boolean>(false);

	const handleSerializeItems = () => {
		return items?.map((item, index) => {
			const Icon = item.icon;

			return (
				<Item
					enabled={item.enabled ?? true}
					key={index}
					onMouseDown={item.action}
				>
					{Icon && <Icon />}
					<Span>{item.label}</Span>
				</Item>
			);
		});
	};

	return (
		<div>
			<Button
				variation="transparent"
				onBlur={() => setActive(false)}
				onClick={() => setActive(!active)}
			>
				<MoreIcon />
			</Button>
			<Wrapper>{active && <Content>{handleSerializeItems()}</Content>}</Wrapper>
		</div>
	);
};
