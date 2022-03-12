import type { LayoutNextPage } from "next";
import { AuthLayout } from "components/layouts/AuthLayout/AuthLayout";
import { Card } from "components/layouts/Card/Card";
import { Input } from "components/forms/Input/Input";
import { Paragraphy } from "components/layouts/Typography/Typography";
import { Anchor } from "components/buttons/Anchor/Anchor";
import { Button } from "components/buttons/Button/Button";
import { Form } from "components/forms/Form/Form";
import { createRef } from "react";

const RegisterPage: LayoutNextPage = () => {
	const userRef = createRef<HTMLInputElement>();
	const passwordRef = createRef<HTMLInputElement>();
	const confirmPasswordRef = createRef<HTMLInputElement>();

	return (
		<Card
			title="Registro"
			append={
				<Paragraphy>
					Fazer <Anchor href={"/"}>Login</Anchor>
				</Paragraphy>
			}
		>
			<Form>
				<Input ref={userRef} label="Usuário" />
				<Input type="password" ref={passwordRef} label="Senha" />
				<Input
					type="password"
					ref={confirmPasswordRef}
					label="Confirmar senha"
				/>
				<Button>Registrar</Button>
			</Form>
		</Card>
	);
};

RegisterPage.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default RegisterPage;
