import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-full p-10 flex flex-col justify-start">
        <div className="account flex items-center pb-0 self-end gap-3">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">99+</span>
            <NavLink to="/admin/notifikasi/1" className="btn btn-circle">
              In
            </NavLink>
          </div>
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <p className="font-bold text-accent">name</p>
        </div>
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className=" bg-bgBtn font-oswald min-h-full w-80 p-11 text-background flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold uppercase mb-10">Pejantara</h1>
            {[
              { path: "/admin/beranda", label: "Beranda" },
              { path: "/admin/statistik", label: "Statistik" },
              { path: "/admin/data pejantara", label: "Data Pejantara" },
              { path: "/admin/pengguna", label: "Pengguna" },
              { path: "/admin/akun", label: "Akun" },
              { path: "/admin/pengaturan", label: "Pengaturan" },
              { path: "/", label: "Keluar" },
            ].map((item) => (
              <li key={item.path}>
                <NavLink
                  className={({ isActive }) =>
                    `relative text-2xl font-thin capitalize block py-2 px-4 hover:bg-transparent  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:bg-background after:w-0 after:transition-all after:duration-300 ${
                      isActive ? "after:w-full" : "hover:after:w-full"
                    }`
                  }
                  to={item.path}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </div>
          <div className="alamat">
            <p>Alamat:</p>
            <p>Bandung, Jawa Barat</p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default AdminLayout;
