import Other4 from "src/assets/icons/other4.svg";
import Other3 from "src/assets/icons/other3.png";
import Other1 from "src/assets/icons/other1.svg";
import Other2 from "src/assets/icons/other2.svg";
const OtherWalletIcon = () => {
  return (
    <div className="grid grid-cols-2 gap-[2px]">
      <span className="block bg-[#3B99FC] rounded-[4px]">
        <img
          src={Other1}
          alt="other-wallet"
          className="w-[30px] h-[30px] lg:w-[15px] lg:h-[15px] rounded-lg"
        />
      </span>
      <img
        src={Other2}
        alt="other-wallet"
        className="w-[30px] h-[30px] lg:w-[15px] lg:h-[15px] rounded-[4px]"
      />

      <img
        src={Other3}
        alt="other-wallet"
        className="w-[30px] h-[30px] lg:w-[15px] lg:h-[15px] rounded-[4px]"
      />
      <img
        src={Other4}
        alt="other-wallet"
        className="w-[30px] h-[30px] lg:w-[15px] lg:h-[15px] rounded-[4px]"
      />
    </div>
  );
};

export default OtherWalletIcon;
