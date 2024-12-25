import Logo from "src/assets/icons/logo.svg";
import { Link } from "react-router";
import MobileNavBar from "./MobileNavBar";
import WalletModal from "../Base/WalletModal";
import { useWalletStore } from "src/store/modal";
const index = () => {
  const store = useWalletStore();
  const links = [
    {
      name: "Bridge",
      url: "/",
    },
    {
      name: "Inscriptions",
      url: "/inscriptions",
    },
    {
      name: "Initial Relayer Offering",
      url: "/sale",
    },
  ];
  return (
    <>
      <nav className="hidden lg:flex justify-between max-w-[1440px] mx-auto px-[70px] py-6 ">
        <Link to="/" className="text-white flex gap-1 items-center">
          <img src={Logo} alt="logo" />
          <p className="text-[1.25rem]">Hyperbridge</p>
        </Link>

        <ul className="flex items-center gap-20">
          {links.map((item) => (
            <li
              key={item.name}
              className="text-[hsla(0,0%,100%,.702)] font-light text-[0.9rem]"
            >
              <Link to={item.url} className="inline-block relative group ">
                <span className="relative inline-block">
                  {item.name}
                  {item.url === "/sale" && (
                    <span className="absolute text-[0.69rem] text-[hsla(0,0%,100%,.702)] after:content-['LIVE!'] after:ml-1 after:text-[#ecbe00] font-bold tracking-widest"></span>
                  )}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-white transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left ${
                    item.url === "/sale" ? "w-[calc(100%+3rem)]" : "w-full"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="border border-white rounded-[30px] text-white py-2 px-4 nav-btn font-light text-[0.9rem]"
          onClick={() => store.updateWalletModal()}
        >
          Connect wallet
        </button>
        <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-[999]">
          {store.walletModal && <WalletModal />}
        </div>
      </nav>
      {store.walletModal && (
        <div
          className="bg-[#010001] opacity-[0.5] h-[100vh] fixed top-0 bottom-0 right-0 left-0"
          onClick={() => store.updateWalletModal()}
        >
          hello
        </div>
      )}
      <div className="lg:hidden">
        <MobileNavBar />
      </div>
    </>
  );
};

export default index;
