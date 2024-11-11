import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const AuthLayout = ({ href, title, paragraph, children, type = "login" }) => {
  const navigate = useNavigate();
  const lyoutType =
    type === "register"
      ? "w-full flex bg-white flex-row-reverse"
      : "w-full flex bg-white";
  const toBerandaType =
    type === "register"
      ? "absolute top-10 left-10 text-white text-xl border-2 border-white p-4 rounded-full"
      : "absolute top-10 right-10 text-white text-xl border-2 border-white p-4 rounded-full";

  return (
    <div className={lyoutType}>
      <div className="w-6/12 h-screen relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="auth"
          className="w-full h-full object-cover"
        />
        <button
          type="button"
          onClick={() => navigate("/")}
          className={toBerandaType}
        >
          Kembali ke Beranda↗
        </button>
      </div>
      <div className="w-6/12 h-screen text-accent flex flex-col items-center justify-center p-48">
        <h1 className="text-6xl font-bold mb-48">{title}</h1>
        <p className="text-xl mb-8">
          {paragraph}
          <Link
            to={`/${href}`}
            className="text-secondary ml-2 hover:underline hover:text-primary"
          >
            {href}
          </Link>
        </p>
        {children}
        <div className="pejantara w-full flex items-center justify-center mt-10">
          <span className="line h-2 w-[40%] bg-bgBtn"></span>
          <p className="text-3xl font-bold font-oswald z-10 text-bgBtn uppercase transform translate-y-[px]">
            Pejantara
          </p>
          <span className="line h-2 w-[40%] bg-bgBtn"></span>
        </div>
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  type: PropTypes.string,
};

export default AuthLayout;
