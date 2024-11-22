import { useEffect, useState } from "react";
import NavbarProfile from "../../components/navbarProfile";
import { Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const PenggunaLayout = () => {
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setUserName(decoded.name);
    } catch (err) {
      console.error("Token invalid:", err);
      navigate("/");
    }
  }, [navigate]);

  if (!userName) {
    return null;
  }

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
                  <h3 className="font-bold text-4xl">{userName}</h3>
                  <p>Pejantara Team</p>
                  <p>Ketua Tim</p>
                </div>
              </div>
              <div className="right flex items-center px-10 text-black">
                <button
                  className="btn bg-accent border-accent hover:bg-accent-focus text-background hover:text-white hover:border-accent hover:bg-accent hover:scale-105 font-semibold rounded-md"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  Edit Profile
                </button>
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box w-11/12 max-w-5xl bg-secondary">
                    <h3 className="font-bold text-lg">Edit Profile</h3>
                    <p className="py-4">Click the button below to close</p>
                    <h3 className="font-bold text-lg">Edit Background</h3>
                    <p className="py-4">Click the button below to close</p>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn bg-accent border-accent hover:bg-accent-focus text-background hover:text-white hover:border-accent hover:bg-accent hover:scale-105 font-semibold rounded-md">
                          Close
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
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
