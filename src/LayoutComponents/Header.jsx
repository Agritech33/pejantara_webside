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
      className={`header w-full h-[108px] px-16 top-0 fixed transition-transform duration-300 z-50 bg-background ${
        showHeader ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <nav className="nav w-full h-full flex justify-between items-center">
        <div className="logo w-[155px] h-full">
          <img
            className="h-full hover:cursor-pointer md:block hidden"
            src="/logo header.png"
            alt="logo"
            width={155}
            height={108}
          />
        </div>
        <ul className="link flex gap-10 h-full p-3 items-end text-xl text-accent no-underline">
          <li>
            <Link className="hover:text-black md:block hidden" to="/">
              Beranda
            </Link>
          </li>
          <li>
            <Link className="hover:text-black md:block hidden" to="/edukasi">
              Edukasi
            </Link>
          </li>
          <li>
            <Link className="hover:text-black md:block hidden" to="/berita">
              Berita
            </Link>
          </li>
          <li>
            <Link className="hover:text-black md:block hidden" to="/peta">
              Peta
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-black md:block hidden"
              to="/tentang-kami"
            >
              Tentang Kami
            </Link>
          </li>
        </ul>
        <div className="profile gap-5 h-full p-3 items-end text-xl md:block hidden">
          <BtnPrimary type="primary">Register</BtnPrimary>
          <BtnPrimary type="secondary">Login</BtnPrimary>
        </div>
      </nav>
    </header>
  );
};

export default Header;
