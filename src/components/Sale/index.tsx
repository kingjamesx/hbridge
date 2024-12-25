import Container from "../Base/Container";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import CustomCheckBox from "components/Base/CustomCheckBox";
import { FiInfo } from "react-icons/fi";

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
  // const [sendChain, setSendChain] = useState("BNB Chain");
  const [openChains, setOpenChains] = useState(false);
  const [selectedChain, setSelectedChain] = useState("polkadot");
  return (
    <Container
      title="Initial Relayer Offering"
      openChain={openChains}
      hideHeaderbtn={true}
    >
      {!openChains ? (
        <section>
          <div className="flex justify-between mt-5 mb-2 text-[0.78rem]">
            <p>
              <span className="text-[rgb(107,114,128)]">Tokens sold:</span>{" "}
              50,087,820.512
            </p>
            <p>
              <span className="text-[rgb(107,114,128)]">Token allocation:</span>{" "}
              100,000,000
            </p>
          </div>
          <span className="w-full h-[4px] block bg-gray-500 border-r-2 overflow-hidden">
            <span className="h-full block bg-blue-300 w-[50.2389%]"></span>
          </span>
          <p className="flex justify-end text-[0.7rem] mt-4 my-2">
            <span className="text-[rgb(107,114,128)] block mr-2">
              Balance: 0{" "}
            </span>{" "}
            MAX
          </p>
          <div className="flex justify-between border border-[#2e2c30] py-3 px-4 rounded-[12px]">
            <span className="block w-[70%]">
              <p className="text-[0.7rem] text-[#858585]">You Contribute</p>
              <input
                type="text"
                placeholder="0"
                className="bg-transparent  outline-none  w-full text-[1.5rem]"
              />
            </span>
            <button
              className="flex justify-between items-center bg-[#19181a] hover:bg-[#1e1d20] rounded-[10px] px-[10px] py-[9px] w-[140px] h-[55px]"
              onClick={() => setOpenChains(true)}
            >
              <span>
                <img
                  src="https://app.hyperbridge.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDot.bf7a42cd.png&w=64&q=75"
                  alt=""
                  className="w-[30px] h-[30px]  "
                />
              </span>
              <span className="block  text-left font-light ">
                <p className="text-sm ">DOT</p>
                <p className="text-xs ">{selectedChain}</p>
              </span>
              <FaChevronDown />
            </button>
          </div>
          <div className="flex justify-between border border-[#2e2c30] py-3 px-4 rounded-[12px] mt-4">
            <span className="block w-[70%]">
              <p className="text-[0.7rem] text-[#858585]">You receive</p>
              <input
                type="text"
                placeholder="0"
                className="bg-transparent  outline-none  w-full text-[1.5rem]"
              />
            </span>
            <button className="flex justify-between items-center bg-[#19181a] hover:bg-[#1e1d20] rounded-[10px] px-[10px] py-[9px] w-[140px] h-[55px] cursor-not-allowed">
              <span>
                <img
                  src="https://app.hyperbridge.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnand.af752b66.png&w=64&q=75"
                  alt=""
                  className="w-[30px] h-[30px]  "
                />
              </span>
              <span className="block  text-left font-light ">
                <p className="text-sm ">BRIDGE</p>
                <p className="text-xs ">Hyperbridg...</p>
              </span>
              <FaChevronDown />
            </button>
            {/* <button
              className={`flex justify-between items-center rounded-[10px] px-[10px] py-[9px] w-[140px] h-[55px] 
        ${
          isDisabled
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-[#19181a] hover:bg-[#2a292b]"
        }
      `}
              disabled={isDisabled}
            >
              <span>
                <img
                  src="https://app.hyperbridge.network/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnand.af752b66.png&w=64&q=75"
                  alt="Bridge Logo"
                  className="w-[30px] h-[30px]"
                />
              </span>
              <span className="block text-left font-light">
                <p className="text-sm">BRIDGE</p>
                <p className="text-xs">Hyperbridg...</p>
              </span>
              <span className="flex items-center">
                <FaChevronDown className="transition-transform duration-200 hover:scale-125" />
              </span>
            </button> */}
          </div>
          <span className="flex items-center gap-2 mt-4 text-[0.8rem]">
            <FiInfo className="rotate-180 text-base" />
            <p>Minimum contribution is 20 DOT</p>
          </span>
          <span className="flex items-center gap-2 mt-4 text-[0.8rem]">
            <FiInfo className="rotate-180 text-base" />

            <p>Exchange rate (200 day moving average) DOT/USD 6.2</p>
          </span>
          <span className="flex items-center gap-2 mt-4 text-[0.8rem] mb-8">
            <FiInfo className="rotate-180 text-base" />{" "}
            <p>Read more about the BRIDGE token distribution here</p>
          </span>

          <CustomCheckBox text=" I have read and agreed to the terms and conditions of this sale" />
          <button className="home-btn py-3 mt-8">
            Connect Polkadot Wallet
          </button>
        </section>
      ) : (
        <section>
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
                  className="px-2 py-4 rounded-[10px] bg-[#19181a] hover:bg-[#272529]"
                  onClick={() => setSelectedChain(chain.name)}
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
        </section>
      )}
    </Container>
  );
};

export default index;
