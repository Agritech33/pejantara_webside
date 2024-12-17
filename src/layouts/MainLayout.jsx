import Header from "../LayoutComponents/Header";
import Footer from "../LayoutComponents/Footer";
import { Outlet } from "react-router-dom";
import ModalChat from "../components/ModalChat";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <ModalChat />
      <Footer />
    </div>
  );
};

export default MainLayout;
