import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import BtnPrimary from "../components/BtnPrimary";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    // Scroll event handler
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Mengambil token saat mount:", token);
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded JWT:", decoded);
        setUserName(decoded.name);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserName(null);
    window.location.href = "/";
  };

  return (
    <header
      className={`header w-full top-0 fixed transition-transform duration-300 z-50 bg-[#16312B] ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <div className="navbar bg-transparent flex justify-between items-center px-5 w-full">
            {/* Logo */}
            <div className="mx-2 flex-1 px-2">
              <NavLink
                to="/"
                className="hover:cursor-pointer md:text-3xl text-background font-oswald font-semibold uppercase"
              >
                Pejantara
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden flex-none lg:block">
              <ul className="menu-horizontal flex gap-6 p-3 text-xl text-background no-underline">
                {[
                  { path: "/", label: "Beranda" },
                  { path: "/edukasi", label: "Edukasi" },
                  { path: "/berita", label: "Berita" },
                  { path: "/peta", label: "Peta" },
                  { path: "/tentang-kami", label: "Tentang Kami" },
                ].map((item) => (
                  <li key={item.path} className="relative">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `relative block py-2 px-4 rounded-none after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:bg-secondary after:w-0 after:transition-all after:duration-300 ${
                          isActive ? "after:w-full" : "hover:after:w-full"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Profile Buttons */}
            <div className="profile gap-5 p-3 text-xl md:flex hidden">
              {userName ? (
                <>
                  <NavLink
                    to="/pengguna/kegiatan"
                    className="text-background font-semibold"
                  >
                    Hello, {userName}
                  </NavLink>
                  <button onClick={handleLogout}>Logout</button>
                  <NavLink
                    to="admin/beranda"
                    className="text-background font-semibold"
                  >
                    admin
                  </NavLink>
                </>
              ) : (
                <>
                  <BtnPrimary type="primary">Register</BtnPrimary>
                  <BtnPrimary type="secondary">Login</BtnPrimary>
                </>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="bg-base-200 min-h-full w-80 p-4">
            {[
              { path: "/", label: "Beranda" },
              { path: "/edukasi", label: "Edukasi" },
              { path: "/berita", label: "Berita" },
              { path: "/peta", label: "Peta" },
              { path: "/tentang-kami", label: "Tentang Kami" },
            ].map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative block py-1 px-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-secondary after:w-0 after:transition-all after:duration-300 ${
                      isActive
                        ? "after:w-full bg-transparent"
                        : "hover:after:w-full"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
