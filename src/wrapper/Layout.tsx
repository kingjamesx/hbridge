import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <div className="bg-[url('src/assets/icons/bg.svg')] bg-black">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
