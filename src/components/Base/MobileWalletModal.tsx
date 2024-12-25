import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { useWalletStore } from "src/store/modal";
import MetaMask from "src/assets/icons/meta.png";
import CoinBase from "src/assets/icons/coinbase.svg";
import OtherWalletIcon from "./OtherWalletIcon";

const MobileWalletModal = () => {
  const store = useWalletStore();
  return (
    <div className="bg-[#2B2B2B] p-5 rounded-t-[24px]  ">
      <div className="flex items-center justify-between">
        <AiOutlineQuestionCircle className="text-[22px] text-[#808080]" />
        <p className="font-medium">Connect Wallet</p>
        <button onClick={() => store.updateWalletModal()}>
          <MdOutlineClose className="text-[28px] text-[#808080]" />
        </button>
      </div>
      <div className="flex items-center justify-between px-5 mt-5 ">
        <span>
          <img src={MetaMask} alt="meta mask" className="w-[60px] h-[60px]" />
          <p className="text-center mt-2">MetaMask</p>
        </span>
        <span>
          <span className="flex items-center justify-center bg-[#0052FE] p-1  rounded-[10px] mx-auto w-[50px]">
            <img src={CoinBase} alt="coin base" className="w-[42px] h-[42px]" />
          </span>
          <p className="text-center mt-4">Coinbase</p>
        </span>
        <span>
          <OtherWalletIcon />
          <p className="text-center mt-2">Other</p>
        </span>
      </div>
      <div className="bg-[#333333] p-5 rounded-[24px] mt-3">
        <p>What is a wallet</p>
        <p className="text-[#858585]">
          Wallets are used to send, receive, and store digital assets.
          Connecting a wallet lets you interact with apps.
        </p>
        <span className="flex justify-between gap-4 mt-2.5">
          <button className="bg-[#424242] py-3  rounded-[16px] w-full">
            Learn More
          </button>
          <button className="bg-[#424242] py-3 rounded-[16px] w-full">
            Get a Wallet
          </button>
        </span>
      </div>
    </div>
  );
};

export default MobileWalletModal;
