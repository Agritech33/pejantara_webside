import { Helmet } from "react-helmet-async";
import { login } from "../../api/auth";
// import AuthLayout from "../../LayoutComponents/AuthLayout";
// import FormLogin from "../../components/FormLogin";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      localStorage.setItem("token", response.token); // Simpan token
      setSuccess("Login successful! Token: " + response.token);
      window.location.href = "/"; // Arahkan ke dashboard
      setError("");
    } catch (err) {
      setError(err.message);
      setSuccess("");
    }
  };

  return (
    <>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <div className="w-full h-screen">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {/*
        <AuthLayout
          title="Masuk Dengan Akun"
          paragraph="Belum punya akun?"
          href="Register"
          type="login"
        >
          <FormLogin name_btn="Masuk" />
        </AuthLayout> */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </div>
    </>
  );
};

export default Login;
