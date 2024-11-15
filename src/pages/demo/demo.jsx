import { Link } from "react-router-dom";
import BtnPrimary from "../../components/BtnPrimary";

const Demo = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <div className="navbar bg-[#16312B] flex justify-between items-center px-5 w-full">
          <div className="mx-2 flex-1 px-2">
            <Link
              to="/"
              className="hover:cursor-pointer md:text-4xl text-background font-oswald font-semibold uppercase"
            >
              Pejantara
            </Link>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal flex gap-10 h-full p-3 items-center text-xl text-background no-underline">
              {/* Navbar menu content here */}
              <li>
                <Link
                  className="hover:text-secondary hover:bg-[#16312B] xl:block md:hidden hidden after:content-[''] after:block after:bg-secondary after:w-0 after:h-1 after:transition-all after:duration-300 hover:after:w-full"
                  to="/"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-secondary hover:bg-[#16312B] xl:block md:hidden hidden after:content-[''] after:block after:bg-secondary after:w-0 after:h-1 after:transition-all after:duration-300 hover:after:w-full"
                  to="/edukasi"
                >
                  Edukasi
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-secondary hover:bg-[#16312B] xl:block md:hidden hidden after:content-[''] after:block after:bg-secondary after:w-0 after:h-1 after:transition-all after:duration-300 hover:after:w-full"
                  to="/berita"
                >
                  Berita
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-secondary hover:bg-[#16312B] xl:block md:hidden hidden after:content-[''] after:block after:bg-secondary after:w-0 after:h-1 after:transition-all after:duration-300 hover:after:w-full"
                  to="/peta"
                >
                  Peta
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-secondary hover:bg-[#16312B] xl:block md:hidden hidden after:content-[''] after:block after:bg-secondary after:w-0 after:h-1 after:transition-all after:duration-300 hover:after:w-full"
                  to="/tentang-kami"
                >
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>
          <div className="profile gap-5 h-full p-3 items-center text-xl md:flex hidden">
            <BtnPrimary type="primary">Register</BtnPrimary>
            <BtnPrimary type="secondary">Login</BtnPrimary>
          </div>
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
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/edukasi">Edukasi</Link>
          </li>
          <li>
            <Link to="/berita">Berita</Link>
          </li>
          <li>
            <Link to="/peta">Peta</Link>
          </li>
          <li>
            <Link to="/tentang-kami">Tentang Kami</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Demo;
