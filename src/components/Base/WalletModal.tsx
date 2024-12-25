import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import MetaMask from "src/assets/icons/meta.png";
import CoinBase from "src/assets/icons/coinbase.svg";
import OtherWalletIcon from "./OtherWalletIcon";
import { LiaWalletSolid } from "react-icons/lia";

import { PiWallet } from "react-icons/pi";

import { useWalletStore } from "src/store/modal";

const WalletModal = () => {
  const store = useWalletStore();
  const list = [
    {
      name: "MetaMask",
      icon: MetaMask,
    },
    {
      name: "Coinbase Wallet",
      icon: CoinBase,
    },
    {
      name: "Other Wallets",
      icon: OtherWalletIcon,
    },
  ];
  return (
    <div className="w-[360px]  mx-auto bg-[#2B2B2B] p-6 text-white rounded-[20px] ">
      <div className="flex items-center justify-between">
        <AiOutlineQuestionCircle className="text-[22px] text-[#808080]" />
        <p className="font-medium">Connect Wallet</p>
        <button onClick={() => store.updateWalletModal()}>
          <MdOutlineClose className="text-[28px] text-[#808080]" />
        </button>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        {list.map((item) => {
          return (
            <button
              key={item.name}
              className="flex justify-between bg-[#383838] hover:bg-[#444444] py-4 px-5 rounded-[16px]"
            >
              <p className="font-medium">{item.name}</p>
              <span>
                {item.name === "Other Wallets" && <item.icon />}
                {item.name == "MetaMask" && (
                  <img
                    //@ts-ignore
                    src={item.icon}
                    alt={item.name}
                    className="w-[30px] h-[30px]"
                  />
                )}
                {item.name == "Coinbase Wallet" && (
                  <span className="block bg-[#0052FE]  rounded-[22.5%]">
                    <img
                      //@ts-ignore
                      src={item.icon}
                      alt={item.name}
                      className="w-[30px] h-[30px]"
                    />
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
      <button className="flex gap-2 items-center justify-center mt-5 group text-[#808080] hover:text-white w-full">
        <span className="group-hover:hidden">
          <PiWallet />
        </span>
        <span className="hidden group-hover:inline">
          <LiaWalletSolid />
        </span>

        <p>i don't have a wallet</p>
      </button>
    </div>
  );
};

export default WalletModal;
