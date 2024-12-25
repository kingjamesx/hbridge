import Container from "components/Base/Container";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const index = () => {
  const [activeTab, setActiveTab] = useState("inflight");
  return (
    <Container title="Transaction history">
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => setActiveTab("inflight")}
          className={`relative group ${
            activeTab === "inflight" ? "text-white" : "text-gray-400"
          }`}
        >
          {/* Persistent underline for active state */}
          {activeTab === "inflight" && (
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white" />
          )}
          {/* Animated underline for hover state - only shows when not active */}
          {activeTab !== "inflight" && (
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
          )}
          Inflight transfers
        </button>

        <button
          onClick={() => setActiveTab("previous")}
          className={`relative group ${
            activeTab === "previous" ? "text-white" : "text-gray-400"
          }`}
        >
          {/* Persistent underline for active state */}
          {activeTab === "previous" && (
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white" />
          )}
          {/* Animated underline for hover state - only shows when not active */}
          {activeTab !== "previous" && (
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
          )}
          Previous transfers
        </button>
      </div>
      <div className="flex justify-end mt-12 gap-8">
        <p>Page 1 of 1</p>

        <span className="flex items-center gap-4">
          <button className="flex items-center">
            <IoIosArrowBack />
            <p>Prev</p>
          </button>
          <button className="flex items-center">
            <p>Next</p>
            <IoIosArrowForward />
          </button>
        </span>
      </div>
    </Container>
  );
};

export default index;
