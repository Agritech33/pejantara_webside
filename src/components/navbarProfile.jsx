import { NavLink } from "react-router-dom";

const NavbarProfile = () => {
  const menuItems = [
    { path: "/pengguna/kegiatan", label: "Kegiatan" },
    { path: "/pengguna/laporan", label: "Laporan" },
    { path: "/pengguna/points", label: "Points" },
    { path: "/pengguna/settings", label: "Settings" },
  ];

  return (
    <ul className="p-4 flex text-xl text-slate-700 font-oswald gap-10 border-b border-slate-500 w-full">
      {menuItems.map((item) => (
        <li key={item.path} className="relative">
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `relative block after:content-[''] px-4 z-10 after:absolute after:left-0 after:bottom-[-18px] after:h-[3px] after:bg-accent after:w-0 after:transition-all after:duration-300 ${
                isActive ? "after:w-full" : "hover:after:w-full"
              }`
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavbarProfile;
