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
import { ChatWidget } from "martha-react-chat-widget";
import "martha-react-chat-widget/style.css";
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[url('src/assets/icons/bg.svg')] bg-no-repeat bg-cover bg-black">
      <ChatWidget
        config={{
          apiKey:
            "11155910a618d1515eddbb90ec2878eaa47cf2d23abdb998884ec194fbe55b24",
          businessId: "67dab13fa8e14a85023f58e1",
          apiBaseUrl: "https://staging.helpline.syxlabs.com",
          socketUrl: "https://staging.helpline.syxlabs.com",
          aiBaseUrl: "https://staging.martha.syxlabs.com/ask",
          threadId: "thread_NJKTk2CTE25Be9DnpFCP7Tny",
          assistantId: "asst_4GnkcKH7JXJXwBPpZaT75hB9",
          aiKey: "qqZkt^n1z7SKnjllK[adWgJ/Ihk_G59@",
          // other config options
        }}
      />
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
