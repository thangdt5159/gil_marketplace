import Image from "next/image";
import React from "react";
import hNft from "../../public/images/header/hNft.png";
import hCreator from "../../public/images/header/hCreator.png";
import { FaInstagram, FaBehance } from "react-icons/fa";

const Header = () => {
  return (
    <section className="pt-[80px] pb-[60px]">
      <div className="md:max-w-[1200px] mx-auto">
        <div className="text-center py-[120px]">
          <h3 className="uppercase text-lightGreen mb-[10px] font-bold font-sans tracking-[1px]">
            create, sell, buy
          </h3>
          <h2 className="mb-[30px]">The new creative economy</h2>
          <button className="text-[20px] leading-5 py-[17px] px-[50px] border border-border rounded-full mt-[10px]">
            Start now
          </button>
        </div>
        <div className="md:max-w-[1140px] mx-auto flex">
          <Image src={hNft} alt="" className="w-1/2 rounded-[20px] p-[10px]" />
          <div className="px-[80px]">
            <h1 className="text-[54px] font-bold leading-[72px] mb-[50px]">
              The cartoon monster <sup>Ⓡ</sup>
            </h1>
            <div className="flex items-center justify-between mb-[30px]">
              <div className="md:w-[17%]">
                <Image
                  src={hCreator}
                  alt=""
                  className="rounded-full w-[50px] h-[50px]"
                />
              </div>
              <div className="md:w-[34%]">
                <h5 className="text-des mb-[10px] leading-none font-bold">
                  Creator
                </h5>
                <p className="text-[20px] font-secondary font-medium leading-[20px]">
                  Paul Rojers
                </p>
              </div>
              <div className="w-1/2 text-end flex justify-end items-center">
                <FaInstagram className="w-[30px] h-[30px]" />
                <FaBehance className="w-[30px] h-[30px] mx-[30px]" />
              </div>
            </div>
            <div className="bg-[#23262F] rounded-[30px] p-10 text-center">
              <p className="text-[22px] font-semibold mb-[10px]">Current bid</p>
              <h2 className="font-bold font-secondary">1.00 ETH</h2>
              <p className="text-[#7A8293] text-[22px] font-bold my-[10px] leading-none">
                $2,767.77
              </p>
              <p className="text-[18px] text-text font-secondary py-[15px]">
                A non-fungible token is a unit of data stored on a digital
                ledger.
              </p>
              <button className="bg-darkBlue font-bold text-[20px] py-[17px] px-[50px] rounded-full w-full leading-tight mt-[10px] transition-colors duration-500 hover:bg-[#36bb91]">
                Place a bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
