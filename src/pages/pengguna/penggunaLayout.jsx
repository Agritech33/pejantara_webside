import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const PenggunaLayout = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full h-full flex items-center">
        <div className="sidebar w-96 h-full bg-accent">
          <div className="flex flex-col h-full w-full p-10">
            <div className="mb-10">
              <Link
                to="/"
                className="hover:cursor-pointer md:text-3xl text-background font-oswald font-semibold uppercase"
              >
                Pejantara
              </Link>
            </div>
            <ul className="no-underline text-white text-xl font-semibold space-y-5">
              <li>
                <Link
                  className="hover:text-secondary xl:block md:hidden hidden after:content-[''] after:block after:bg-secondary after:w-0 after:h-1 after:transition-all after:duration-300 hover:after:w-full"
                  to="/"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-secondary xl:block md:hidden hidden after:content-[''] after:block after:bg-secondary after:w-0 after:h-1 after:transition-all after:duration-300 hover:after:w-full"
                  to="/edukasi"
                >
                  Edukasi
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-secondary xl:block md:hidden hidden after:content-[''] after:block after:bg-secondary after:w-0 after:h-1 after:transition-all after:duration-300 hover:after:w-full"
                  to="/berita"
                >
                  Berita
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-secondary xl:block md:hidden hidden after:content-[''] after:block after:bg-secondary after:w-0 after:h-1 after:transition-all after:duration-300 hover:after:w-full"
                  to="/peta"
                >
                  Peta
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-secondary xl:block md:hidden hidden after:content-[''] after:block after:bg-secondary after:w-0 after:h-1 after:transition-all after:duration-300 hover:after:w-full"
                  to="/tentang-kami"
                >
                  Tentang Kami
                </Link>
              </li>
            </ul>
            <div className="dropdown dropdown-right dropdown-end absolute bottom-10">
              <div tabIndex={0} role="button" className="">
                <img
                  src="technical-support (1).png"
                  alt="tecnical-support"
                  className="w-12 h-w-12 hover:cursor-pointer hover:scale-105 transition-all duration-150 ease-in-out"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content w-full h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PenggunaLayout;
