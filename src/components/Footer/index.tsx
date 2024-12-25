const index = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="text-[#858585] font-light text-sm  pt-14 py-4 max-w-[1440px] mx-auto px-5 lg:px-[100px]">
      © {currentYear} Hyperbridge. All rights reserved.
    </footer>
  );
};

export default index;
