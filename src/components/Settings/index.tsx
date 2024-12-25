import Container from "components/Base/Container";
import { AiOutlineInfoCircle } from "react-icons/ai";

const index = () => {
  return (
    <Container title="Settings">
      <span className="flex items-center">
        <p>Default transaction time out in seconds</p>{" "}
        <button className="">
          <AiOutlineInfoCircle className="text-white hover:opacity-[1] opacity-[0.5]" />
        </button>
      </span>

      <div className="flex gap-[6px] mt-3 pb-20">
        <button className="bg-[#19181a] hover:bg-[#26232b]  rounded-xl py-1 px-4">
          Default
        </button>
        <input
          type="text"
          className="py-2 px-4 border border-[#2e2c30] rounded-[10px] bg-transparent outline-none w-full"
        />
      </div>
    </Container>
  );
};

export default index;
