import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BtnPrimary from "../components/BtnPrimary";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`header w-full h-[108px] px-5 md:px-16 top-0 fixed transition-transform duration-300 z-50 bg-background ${
        showHeader ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <nav className="navbar h-full w-full flex justify-between items-center">
        <div className="logo md:w-[155px] h-full flex justify-center items-center">
          <Link
            to="/"
            className="hover:cursor-pointer md:text-4xl text-2xl text-accent font-oswald font-semibold"
          >
            Pejantara
          </Link>
          {/* <img
            className="h-full hover:cursor-pointer xl:block md:hidden hidden"
            src="/logo header.png"
            alt="logo"
            width={155}
            height={108}
          /> */}
        </div>
        <ul className="link flex gap-10 h-full p-3 items-center text-xl text-accent no-underline">
          <li>
            <Link
              className="hover:text-black xl:block md:hidden hidden after:content-[''] after:block after:bg-secondary after:w-0 after:h-1 after:transition-all after:duration-300 hover:after:w-full"
              to="/"
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-black xl:block md:hidden hidden after:content-[''] after:block after:bg-secondary after:w-0 after:h-1 after:transition-all after:duration-300 hover:after:w-full"
              to="/edukasi"
            >
              Edukasi
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-black xl:block md:hidden hidden after:content-[''] after:block after:bg-secondary after:w-0 after:h-1 after:transition-all after:duration-300 hover:after:w-full"
              to="/berita"
            >
              Berita
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-black xl:block md:hidden hidden after:content-[''] after:block after:bg-secondary after:w-0 after:h-1 after:transition-all after:duration-300 hover:after:w-full"
              to="/peta"
            >
              Peta
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-black xl:block md:hidden hidden after:content-[''] after:block after:bg-secondary after:w-0 after:h-1 after:transition-all after:duration-300 hover:after:w-full"
              to="/tentang-kami"
            >
              Tentang Kami
            </Link>
          </li>
        </ul>
        <div className="profile gap-5 h-full p-3 items-center text-xl md:flex hidden">
          <BtnPrimary type="primary">Register</BtnPrimary>
          <BtnPrimary type="secondary">Login</BtnPrimary>
        </div>
        <div className="hamburger md:hidden block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
