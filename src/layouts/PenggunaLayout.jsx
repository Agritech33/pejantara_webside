import { Outlet } from "react-router-dom";

const PenggunaLayout = () => {
  return (
    <div className="w-full flex">
      <Outlet />
    </div>
  );
};

export default PenggunaLayout;
