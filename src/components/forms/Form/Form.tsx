import { FormEvent, FormHTMLAttributes } from "react";
import styled from "@emotion/styled";

const Container = styled.form`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

type FormProps = FormHTMLAttributes<HTMLFormElement>;

export const Form: React.FC<FormProps> = ({ children, onSubmit, ...props }) => {
	const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		return onSubmit && onSubmit(event);
	};

	return (
		<Container onSubmit={handleOnSubmit} {...props}>
			{children}
		</Container>
	);
};
