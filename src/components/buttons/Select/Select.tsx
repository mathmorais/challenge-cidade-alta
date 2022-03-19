import styled from "@emotion/styled";
import { InputHelper } from "components/forms/Input/Input.helper";
import { useEffect, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "utils/constants/icons";
import { shadows } from "utils/constants/shadows";
import { Span } from "../../layouts/Typography/Typography";
import { ButtonHelper } from "../Button/Button.helper";

const SelectWrapper = styled(InputHelper)`
	padding: 5px 0;
`;

const SelectBox = styled(ButtonHelper)`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	position: absolute;
	width: 100%;
	height: 100%;
	overflow: hidden;
	padding: 0 16px;
	z-index: 3;
	cursor: pointer;

	svg {
		position: absolute;
		right: 16px;
	}

	${Span} {
		color: ${(props) => props.theme.neutral.black};
		font-weight: 500;
	}
`;

const SelectFieldset = styled.fieldset`
	position: absolute;
	inset: 0;
	border: 2px solid ${(props) => props.theme.neutral[200]};
	border-radius: 8px;
	background: none;
	padding: 0 10px;

	${Span} {
		padding: 0 4px;
		font-weight: 500;
		color: ${(props) => props.theme.neutral[300]};
	}
`;

const SelectMenu = styled.ul`
	display: flex;
	flex-direction: column;
	width: 100%;
	position: absolute;
	top: 5px;
	transform: translateY(55px);
	background: ${(props) => props.theme.neutral.white};
	border-radius: 8px;
	padding: 8px;
	z-index: 10;
	overflow: hidden;
	box-shadow: ${shadows.level2};
`;

const SelectMenuItem = styled(ButtonHelper)`
	padding: 17px;
	justify-content: flex-start;

	&:hover {
		background: ${(props) => props.theme.neutral[100]};
	}

	${Span} {
		font-weight: 500;
		color: ${(props) => props.theme.neutral.black};
	}
`;

type Keys = string | number;

type SelectProps = {
	value?: Keys;
	label?: string;
	placeholder?: string;
	items: { [key: Keys]: any };
	onChange?: (value: any) => void;
};

export const Select: React.FC<SelectProps> = ({
	label,
	items,
	onChange,
	...props
}) => {
	const [value, setValue] = useState(props.value);
	const [active, setActive] = useState<boolean>(false);

	useEffect(() => {
		onChange && onChange(value);
	}, [value]);

	const handleSerializeMenuItems = () => {
		return Object.keys(items).map((item, index) => (
			<SelectMenuItem
				type="button"
				key={index}
				onMouseDown={() => setValue(item)}
			>
				<Span>{items[item]}</Span>
			</SelectMenuItem>
		));
	};

	return (
		<SelectWrapper onBlur={() => setActive(false)}>
			<SelectBox
				type="button"
				onClick={() => {
					setActive(!active);
				}}
			>
				{active ? <ChevronDownIcon /> : <ChevronUpIcon />}
				<Span>{!value ? props.placeholder : items[value]}</Span>
			</SelectBox>

			<SelectFieldset {...props}>
				{label && (
					<legend>
						<Span>{label}</Span>
					</legend>
				)}
			</SelectFieldset>
			{active && <SelectMenu>{handleSerializeMenuItems()}</SelectMenu>}
		</SelectWrapper>
	);
};
