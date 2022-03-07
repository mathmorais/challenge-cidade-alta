import type { LayoutNextPage } from "next";
import { AuthLayout } from "components/layouts/AuthLayout/AuthLayout";

const RegisterPage: LayoutNextPage = () => {
  return <div>Register</div>;
};

RegisterPage.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default RegisterPage;
