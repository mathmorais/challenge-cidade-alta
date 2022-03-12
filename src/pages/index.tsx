import type { LayoutNextPage } from "next";
import { Input } from "components/forms/Input/Input";
import { AuthLayout } from "components/layouts/AuthLayout/AuthLayout";
import { Card } from "components/layouts/Card/Card";
import { Form } from "components/forms/Form/Form";
import { Button } from "components/buttons/Button/Button";
import { Paragraphy } from "components/layouts/Typography/Typography";
import { Anchor } from "components/buttons/Anchor/Anchor";
import { useRouter } from "next/router";

const LoginPage: LayoutNextPage = () => {
	const router = useRouter();

	return (
		<Card
			title="Login"
			append={
				<Paragraphy>
					Se <Anchor href={"/register"}>Registrar</Anchor>
				</Paragraphy>
			}
		>
			<Form onSubmit={() => router.push("/dashboard/codigos")}>
				<Input label="Usuário" />
				<Input type="password" label="Senha" />
				<Button>Submit</Button>
			</Form>
		</Card>
	);
};

LoginPage.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default LoginPage;
