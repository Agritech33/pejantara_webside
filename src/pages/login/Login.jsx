import { Helmet } from "react-helmet-async";
import { login } from "../../api/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      localStorage.setItem("token", response.token);
      setSuccess("Login successful! Token: " + response.token);
      window.location.href = "/";
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
        <div className="w-full flex bg-whit">
          <div className="w-6/12 h-screen relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="auth"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => navigate("/")}
              className="absolute top-10 right-10 text-white text-xl border-2 border-white p-4 rounded-full"
            >
              Kembali ke Beranda↗
            </button>
          </div>
          <div className="w-6/12 h-screen text-accent flex flex-col items-center justify-center p-48">
            <h1 className="text-6xl font-bold mb-48">Login Dengan Akun</h1>
            <p className="text-xl mb-8">
              Belum punya akun?
              <Link
                to={`/register`}
                className="text-secondary ml-2 hover:underline hover:text-primary"
              >
                Register
              </Link>
            </p>
            <div className="flex flex-col gap-8 w-full text-xl">
              <input
                type="email"
                placeholder="Email"
                value={email}
                className="input-auth bg-accent bg-opacity-15 py-4 px-3 rounded-md"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                className="input-auth bg-accent bg-opacity-15 py-4 px-3 rounded-md"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="button-auth w-full mb-4 bg-bgBtn py-4 px-3 rounded-md text-white"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div className="pejantara w-full flex items-center justify-center mt-10">
              <span className="line h-2 w-[40%] bg-bgBtn"></span>
              <p className="text-3xl font-bold font-oswald z-10 text-bgBtn uppercase transform translate-y-[px]">
                Pejantara
              </p>
              <span className="line h-2 w-[40%] bg-bgBtn"></span>
            </div>
          </div>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </div>
    </>
  );
};

export default Login;
