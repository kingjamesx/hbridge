import { useState } from "react";
import { Link } from "react-router";
import Logo from "src/assets/icons/logo.svg";
import Menu from "src/assets/icons/menu.svg";
import Cancel from "src/assets/icons/cancel.svg";
import MobileWalletModal from "components/Base/MobileWalletModal";
import { useWalletStore } from "src/store/modal";

const MobileNavBar = () => {
  const store = useWalletStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      name: "Transfers",
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
    <nav className="p-5 text-white">
      <div className="flex justify-between">
        <Link to="/" className="text-white flex items-center gap-2">
          <img src={Logo} alt="logo" />
          <p>Hyperbridge</p>
        </Link>

        <button
          className="border rounded-full p-2.5  relative z-[99]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={isMenuOpen ? Cancel : Menu} alt="menu" />
        </button>
      </div>

      {/* Animated Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-transform duration-300 ease-in-out z-[50] ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "0", left: "0", right: "0", bottom: "0" }}
      >
        <div className="flex flex-col h-full pt-24 px-5">
          <ul className="space-y-6">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.url}
                  className="text-lg font-medium hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Connect Wallet button positioned at bottom */}
          <button
            type="button"
            className="w-full rounded-[56px] border py-2 mt-auto mb-8"
            onClick={() => store.updateWalletModal()}
          >
            Connect wallet
          </button>

          <div
            className={`fixed inset-0 bg-black/50 transition-opacity duration-500 ${
              store.walletModal
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => store.updateWalletModal()}
          />
          <div
            className={`fixed bottom-0 right-0 left-0 transform transition-transform duration-300 ease-in-out ${
              store.walletModal ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <MobileWalletModal />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavBar;
