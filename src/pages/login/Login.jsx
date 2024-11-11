import { Helmet } from "react-helmet-async";
import AuthLayout from "../../LayoutComponents/AuthLayout";
import FormLogin from "../../components/FormLogin";
const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <div className="w-full h-screen">
        <AuthLayout
          title="Masuk Dengan Akun"
          paragraph="Belum punya akun?"
          href="Register"
          type="login"
        >
          <FormLogin name_btn="Masuk" />
        </AuthLayout>
      </div>
    </>
  );
};

export default Login;
