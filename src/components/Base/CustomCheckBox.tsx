const CustomCheckBox = ({ text }: { text: string }) => {
  return (
    <label className="flex items-center gap-2">
      <div className="relative mt-1">
        <input
          type="checkbox"
          className="peer appearance-none w-4 h-4 border border-white rounded-sm bg-transparent checked:bg-white checked:border-transparent"
        />
        {/* <svg
          className="absolute inset-0 fill-black pointer-events-none opacity-0 peer-checked:opacity-100"
          viewBox="0 0 16 16"
          width="16"
          height="16"
        >
          <path d="M13.3 3.3l-7.3 7.3-3.3-3.3-1.4 1.4 4.7 4.7 8.7-8.7-1.4-1.4z" />
        </svg> */}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 absolute inset-0 fill-black pointer-events-none opacity-0 peer-checked:opacity-100 top-[2px]"
        >
          <path
            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
            fill="black"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <span className="text-white text-[0.92rem]">{text}</span>
    </label>
  );
};

export default CustomCheckBox;
