import Container from "../Base/Container";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";
import { FiInfo } from "react-icons/fi";
import Warning from "src/assets/icons/warning.svg";
import { Tooltip as ReactTooltip } from "react-tooltip";
const index = () => {
  const chains = [
    {
      name: "polkadot",
      icon: "https://app.hyperbridge.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpolkadot.ace494a4.png&w=64&q=75",
    },
    {
      name: "Ethereum",
      icon: "https://app.hyperbridge.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fethereum.edb44f31.png&w=64&q=75",
    },
    {
      name: "Optimism",
      icon: "https://app.hyperbridge.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foptimism.f55bfa8c.png&w=64&q=75",
    },
    {
      name: "Gnosis",
      icon: "https://app.hyperbridge.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgnosis.78ccec42.jpeg&w=64&q=75",
    },
    {
      name: "Abitrum",
      icon: "https://app.hyperbridge.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farbitrum.43e74c22.png&w=32&q=75",
    },
    {
      name: "BNB Chain",
      icon: "https://app.hyperbridge.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbsc.c882ef1f.png&w=64&q=75",
    },
    {
      name: "Base",
      icon: "https://app.hyperbridge.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbase.405fe4d0.png&w=64&q=75",
    },
  ];
  const [openChains, setOpenChains] = useState(false);
  const [sendChain, setSendChain] = useState("BNB Chain");
  const [receiveChain, setReceiveChain] = useState("Ethereum");
  const [openSendChainModal, setOpenSendChainModal] = useState(false);
  const [openReceiveChainModal, setReceiveChainModal] = useState(false);

  const selectChain = (val: string) => {
    if (openSendChainModal) {
      setSendChain(val);
    } else {
      setReceiveChain(val);
    }
  };
  const openSendModal = () => {
    setOpenSendChainModal(true);
    setReceiveChainModal(false);
    setOpenChains(true);
  };
  const openReceiveModal = () => {
    setOpenSendChainModal(false);
    setReceiveChainModal(true);
    setOpenChains(true);
  };
  const switchChain = () => {
    setSendChain(receiveChain);
    setReceiveChain(sendChain);
  };
  const getImage = (val: string) => {
    return chains.find((item) => item.name === val)?.icon;
  };
  return (
    <Container title="Transfer" openChain={openChains} className="mb-[100px]">
      {!openChains ? (
        <main>
          <div>
            <p className="flex items-center justify-end mt-4 text-[0.7rem]">
              <span className="text-[rgb(107,114,128)] block mr-2">
                Balance:0{" "}
              </span>{" "}
              <button className="font-light">MAX</button>
            </p>
          </div>
          <section className="mt-3 ">
            <div className="flex justify-between border border-[#2e2c30] py-3 px-4 rounded-[12px]">
              <span className="block w-[70%]">
                <p className="text-[#858585] font-light text-[0.7rem]">send</p>
                <input
                  type="text"
                  placeholder="0"
                  className="bg-transparent  outline-none  w-full text-[1.5rem]"
                />
              </span>
              <button
                className="flex justify-between items-center bg-[#19181a] hover:bg-[#1e1d20] rounded-[10px] px-[10px] py-[9px] w-[140px] h-[55px]"
                onClick={openSendModal}
              >
                <span className="relative">
                  <img
                    src="https://app.hyperbridge.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDot.bf7a42cd.png&w=64&q=75"
                    alt=""
                    className="w-[30px] h-[30px]  "
                  />
                  <img
                    src={getImage(sendChain)}
                    alt={sendChain}
                    className="absolute right-0 top-5 w-[12px] h-[12px]"
                  />
                </span>
                <span className="block  text-left font-light ">
                  <p className="text-sm ">DOT</p>
                  <p className="text-xs ">{sendChain}</p>
                </span>
                <FaChevronDown />
              </button>
            </div>
            {/* convert button */}
            <div className="relative">
              <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <button
                  className="bg-white rounded-full p-3"
                  onClick={switchChain}
                >
                  <GoArrowSwitch className="rotate-[270deg] text-black" />
                </button>
              </div>
            </div>

            {/* receive */}
            <div className="flex justify-between border border-[#2e2c30] py-3 px-4 rounded-[12px] mt-2">
              <span className="block w-[70%]">
                <p className="text-[#858585] font-light text-[0.7rem]">
                  Receive
                </p>
                <input
                  type="text"
                  placeholder="0"
                  className="bg-transparent  outline-none  w-full text-[1.5rem]"
                />
              </span>
              <button
                className="flex justify-between items-center bg-[#19181a] hover:bg-[#1e1d20] rounded-[10px] px-[10px] py-[9px] w-[140px] h-[55px]"
                onClick={openReceiveModal}
              >
                <span className="relative">
                  <img
                    src="https://app.hyperbridge.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDot.bf7a42cd.png&w=64&q=75"
                    alt=""
                    className="w-[30px] h-[30px]  "
                  />
                  <img
                    src={getImage(receiveChain)}
                    alt={receiveChain}
                    className="absolute right-0 top-5 w-[12px] h-[12px]"
                  />
                </span>
                <span className="block  text-left font-light ">
                  <p className="text-sm ">DOT</p>
                  <p className="text-xs ">{receiveChain}</p>
                </span>
                <FaChevronDown />
              </button>
            </div>
            <div className="mt-4">
              <span>
                <label htmlFor="" className="font-light text-[0.9rem]">
                  Recipient Address
                </label>
                <input
                  type="text"
                  placeholder="address"
                  className="bg-[#19181a] w-full rounded-[10px] py-3 mt-2 outline-none px-4 border-none text-[#858585] font-light text-[0.9rem]"
                />
              </span>
              <span className="flex justify-between mt-3 font-light text-[0.8rem] text-[#858585]">
                <p className="flex items-center gap-1">
                  Transaction Fee <FiInfo data-tooltip-id="my-tooltip-1" />
                </p>
                <p>2 DOT</p>
              </span>
              <ReactTooltip
                id="my-tooltip-1"
                place="right"
                content="This is deducted from the amount you send and it's used to cover the settlement fee with etereum"
              />
              <span className="flex justify-between mt-3 font-light text-[0.8rem] text-[#858585]">
                <p>Estimated time for transfer</p>
                <p>About 25 minutes</p>
              </span>
              <button className="home-btn py-3 mt-5">
                Connect Polkadot Wallet
              </button>
              {receiveChain !== "polkadot" && (
                <div className="flex gap-3 items-center bg-[#C1410B] mt-4 px-[2.5rem] py-[1rem] rounded-[0.75rem]">
                  {/* <IoWarningOutline className="text-[24px] " /> */}
                  <img src={Warning} alt="warning" />
                  <p className="font-light text-[15px]">
                    You will need to make a final transaction on {receiveChain}{" "}
                    to claim your funds.
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>
      ) : (
        <main>
          <div className="flex items-center justify-between">
            <h2>Select Source Chain</h2>
            <button
              onClick={() => setOpenChains(!openChains)}
              className="border border-[hsla(0,0%,100%,.16)] hover:border-white rounded-full p-2.5"
            >
              <IoMdCheckmark />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {chains.map((chain) => {
              return (
                <button
                  key={chain.name}
                  className={`px-2 py-4 rounded-[10px] ${
                    (openSendChainModal && sendChain === chain.name) ||
                    (openReceiveChainModal && receiveChain === chain.name)
                      ? "bg-[#3F3E40]"
                      : "bg-[#19181A]"
                  }  hover:bg-[#272529] `}
                  onClick={() => selectChain(chain.name)}
                >
                  <span className="flex flex-col items-center justify-center gap-2">
                    <img
                      src={chain.icon}
                      alt={chain.name}
                      className="w-[30px] h-[30px]"
                    />
                    <p>{chain.name}</p>
                  </span>
                </button>
              );
            })}
          </div>
        </main>
      )}
    </Container>
  );
};

export default index;
