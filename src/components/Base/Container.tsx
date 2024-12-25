import Filter from "src/assets/icons/filter.svg";
import History from "src/assets/icons/history.svg";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import BackArrow from "src/assets/icons/backarrow.svg";
import { IoMdCheckmark } from "react-icons/io";

const Container = ({
  title,
  children,
  openChain,
  className,
  hideHeaderbtn,
}: {
  title: string;
  children: React.ReactNode;
  openChain?: boolean;
  className?: string;
  hideHeaderbtn?: boolean;
}) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div
      className={` ${className} p-5 lg:p-[30px] bg-[#0c0c0c] mx-auto max-w-[600px] rounded-[24px] mt-10 text-white lg:border border-[hsla(0,0%,100%,.04)]`}
    >
      {!openChain && (
        <header className="flex items-center justify-between">
          <h2 className="text-[1.5rem] lg:text-[1.875rem] ">{title}</h2>
          {title !== "Settings" &&
            title !== "Transaction history" &&
            !hideHeaderbtn && (
              <span className="flex gap-2.5">
                <Link
                  to="/settings"
                  className="border border-[hsla(0,0%,100%,.12)] hover:border-white p-3 rounded-full transition-all"
                >
                  <img src={Filter} alt="filter" />
                </Link>
                <Link
                  to="/history"
                  className="border border-[hsla(0,0%,100%,.12)] hover:border-white p-3 rounded-full transition-all"
                >
                  <img src={History} alt="history" />
                </Link>
              </span>
            )}
          {title === "Settings" && (
            <button
              onClick={goBack}
              className="border border-[hsla(0,0%,100%,.16)] hover:border-white rounded-full p-2.5"
            >
              <IoMdCheckmark />
            </button>
          )}
          {title === "Transaction history" && (
            <button
              onClick={goBack}
              className="border border-[hsla(0,0%,100%,.16)] hover:border-white rounded-full p-2.5"
            >
              <img src={BackArrow} alt="back" />
            </button>
          )}
        </header>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Container;
