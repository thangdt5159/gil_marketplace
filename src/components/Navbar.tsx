import React from "react";
import { HiChevronDown } from "react-icons/hi";

const Navbar = () => {
  const data = [
    {
      id: 1,
      title: "NFT",
    },
    {
      id: 2,
      title: "Crypto",
    },
    {
      id: 3,
      title: "About Us",
    },
    {
      id: 4,
      title: "Our Team",
    },
    {
      id: 5,
      title: "Contact Us",
    },
    {
      id: 6,
      title: "Online Shop",
    },
    {
      id: 7,
      title: "Blog",
    },
  ];

  return (
    <nav className="font-sans mt-4 absolute py-[2px] px-[1.5rem] bg-transparent w-full">
      <div className="flex justify-between items-center md:max-w-[1400px] mx-auto">
        <div className="font-extrabold text-[28px]">LOGO</div>
        <div className="flex items-center justify-between text-[15px]">
          {data.map((item) => (
            <div className="navbar-item flex items-center cursor-pointer transition-all duration-500 hover:text-lightGreen py-4 px-5">
              <div key={item.id} className="font-medium mr-[6px]">
                {item.title}
              </div>
              <HiChevronDown className="down-arrow transition-all duration-500" />
            </div>
          ))}
          <button className="py-[9px] px-[22px] border border-border rounded-[15px] leading-[15px] font-medium ml-5 transition-all duration-500 hover:bg-white hover:text-[#212529]">
            Buy Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
