import { Outlet } from "react-router-dom";
import NavbarProfile from "../../components/navbarProfile";

const PenggunaLayout = () => {
  return (
    <div className="w-full flex items-center justify-center pt-20 px-20">
      <div className="content w-full">
        <div className="container-profile w-full rounded-md">
          <div className="background w-full h-[50vh] overflow-hidden">
            <img
              src="/sampul.jpg"
              alt=""
              className="w-full h-full object-cover rounded-md transform hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
          <div className="w-full">
            <div className="profile w-full flex h-1/3 items-center justify-between">
              <div className="left flex h-full px-10 gap-10 items-center">
                <div className="image w-60 h-60 rounded-full overflow-hidden border-8 border-background transform translate-y-[-20%]">
                  <img src="/profile.jpg" alt="" className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-5 text-black">
                  <h3 className="font-bold text-4xl">Ageng Prayoga</h3>
                  <p>Pejantara Team</p>
                  <p>Ketua Tim</p>
                </div>
              </div>
              <div className="right flex items-center px-10 text-black">
                <h3>edit profile</h3>
              </div>
            </div>
          </div>
          <NavbarProfile />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default PenggunaLayout;
