// import Footer from "components/Footer";
// import NavBar from "components/NavBar";
// import { Outlet } from "react-router";
// const Layout = () => {
//   return (
//     <div className="bg-[url('src/assets/icons/bg.svg')] bg-black">
//       <NavBar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[url('src/assets/icons/bg.svg')] bg-no-repeat bg-cover bg-black">
      {/* NavBar */}
      <div className="border-b border-solid border-[hsla(0,0%,100%,.12)]">
        <NavBar />
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer */}
      <div className="border-t border-solid border-[hsla(0,0%,100%,.12)]">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
