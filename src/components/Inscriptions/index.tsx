import { useState } from "react";
import Container from "../Base/Container";
import { GoArrowSwitch } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { FiInfo } from "react-icons/fi";
import { Tooltip as ReactTooltip } from "react-tooltip";

const index = () => {
  const chains = [
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
  const [openSourceChainModal, setSourceChainModal] = useState(false);
  const [_, setDestinationChainModal] = useState(false);
  const [relayerFee, setRelayerFee] = useState("12.6575484");
  const [selectedSourceChain, setSelectedSourceChain] = useState("BNB Chain");
  const [selectedDestinationChain, setSelectedDestinationChain] =
    useState("Ethereum");
  const getImage = (val: string) => {
    return chains.find((item) => item.name === val)?.icon;
  };
  const selectChain = (val: string) => {
    if (openSourceChainModal) {
      setSelectedSourceChain(val);
    } else {
      setSelectedDestinationChain(val);
    }
  };
  const toggleOpenSourceModal = () => {
    setOpenChains(true);
    setSourceChainModal(true);
    setDestinationChainModal(false);
  };
  const toggleOpenDestinationModal = () => {
    setOpenChains(true);
    setSourceChainModal(false);
    setDestinationChainModal(true);
  };
  const switchChain = () => {
    setSelectedSourceChain(selectedDestinationChain);
    setSelectedDestinationChain(selectedSourceChain);
  };
  return (
    <Container title="Inscriptions" openChain={openChains}>
      {!openChains ? (
        <section>
          <div className="flex justify-between items-center  lg:items-end mt-5 ">
            <span className="">
              <p className="text-[0.8rem] font-light mb-[6px] text-[rgb(133,133,133)]">
                Source chain
              </p>
              <button
                className="flex justify-between items-center bg-[#19181a] hover:bg-[#1e1d20] rounded-[10px] px-[10px] py-[9px] w-[152px] lg:w-[234px]  h-[48px]"
                onClick={toggleOpenSourceModal}
              >
                <span className="flex items-center gap-2">
                  <img
                    src={getImage(selectedSourceChain)}
                    alt={selectedSourceChain}
                    className="w-[30px] h-[30px]  "
                  />

                  <p className="text-[0.8rem] font-light">
                    {selectedSourceChain}
                  </p>
                </span>
                <FaChevronDown className="text-[12px]" />
              </button>
            </span>

            <span>
              <button
                className="border border-[hsla(240,3.7%,15.9%)] rounded-full p-2.5 mt-[18px] lg:mt-0"
                onClick={switchChain}
              >
                <GoArrowSwitch className="text-[1.125rem]" />
              </button>
            </span>
            <span>
              <p className="text-[0.8rem] mb-[6px] text-[rgb(133,133,133)] font-light">
                Destination chain
              </p>
              <button
                className="flex justify-between items-center bg-[#19181a] hover:bg-[#1e1d20] rounded-[10px] px-[10px] py-[9px] w-[152px] lg:w-[234px]  h-[48px]"
                onClick={toggleOpenDestinationModal}
              >
                <span className="flex items-center gap-2">
                  <img
                    src={getImage(selectedDestinationChain)}
                    alt={selectedDestinationChain}
                    className="w-[30px] h-[30px]  "
                  />

                  <p className="text-[0.8rem] font-light">
                    {selectedDestinationChain}
                  </p>
                </span>
                <FaChevronDown className="text-[12px]" />
              </button>
            </span>
          </div>
          <div className="border border-[#2e2c30] mt-5 p-4 rounded-xl">
            <label
              htmlFor=""
              className="block font-light text-[0.8rem] text-[#858585]"
            >
              Message
            </label>
            <input
              type="text"
              placeholder="Less trust,More Proofs"
              className="bg-transparent outline-none text-[1.4rem]"
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="flex items-center gap-[6px]">
              <p className="text-[#858585] font-light text-[0.9rem]">
                Relayer Fee
              </p>
              <FiInfo
                data-tooltip-id="my-tooltip-1"
                className="text-[#858585] hover:text-white"
              />
            </span>
            <ReactTooltip
              id="my-tooltip-1"
              place="right"
              content="The amount that is offered to 3rd party relayers for transaction delivery and execution. Changing this default may result in the failure of transaction delivery"
            />
            <span className="border border-[#2e2c30] flex items-center justify-between rounded-[10px] p-2">
              <input
                type="text"
                className="bg-transparent outline-none text-[0.8rem]"
                value={relayerFee}
                onChange={(e) => setRelayerFee(e.target.value)}
              />
              <p className="text-[0.7rem] text-[#858585]">USD</p>
            </span>
          </div>
          <button className="home-btn py-3 mt-4">Connect EVM Wallet</button>
        </section>
      ) : (
        <section className="pb-[150px]">
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
        </section>
      )}
    </Container>
  );
};

export default index;
