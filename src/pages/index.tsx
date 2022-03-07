import { AuthLayout } from "components/layouts/AuthLayout/AuthLayout";
import type { LayoutNextPage, NextPage } from "next";

const LoginPage: LayoutNextPage = () => {
  return <div>Login</div>;
};

LoginPage.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default LoginPage;
