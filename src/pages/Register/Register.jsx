import { Helmet } from "react-helmet-async";
import AuthLayout from "../../LayoutComponents/AuthLayout";
import FormRegister from "../../components/FormRegister";

const Register = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Helmet>
        <title>Register Page</title>
      </Helmet>
      <div className="w-full h-screen">
        <AuthLayout
          href="Login"
          title="Daftar Akun Baru"
          paragraph="Sudah punya akun?"
          type="register"
        >
          <FormRegister name_btn="Daftar" />
        </AuthLayout>
      </div>
    </div>
  );
};

export default Register;
