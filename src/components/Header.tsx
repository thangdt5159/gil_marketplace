import Image from "next/image";
import React from "react";
import hNft from "../../public/images/header/hNft.png";
import hCreator from "../../public/images/header/hCreator.png";
import { FaInstagram, FaBehance } from "react-icons/fa";
import TopTitle from "./TopTitle";
import ballR1 from "../../public/images/header/ball-right1.png";
import ballR2 from "../../public/images/header/ball-right2.png";
import ballR3 from "../../public/images/header/ball-right3.png";
import ballL1 from "../../public/images/header/ball-left1.png";
import ballL2 from "../../public/images/header/ball-left2.png";
import ballL3 from "../../public/images/header/ball-left3.png";

const Header = () => {
  return (
    <section className="pt-[80px] pb-[60px]">
      <div className="relative md:max-w-[1200px] mx-auto">
        <Image
          src={ballR1}
          alt=""
          className="absolute w-10 h-10 left-[80%] top-0"
        />
        <Image
          src={ballR2}
          alt=""
          className="absolute w-[50px] h-[50px] right-[10px] top-[83px] animate-diagonalMove"
        />
        <Image
          src={ballR3}
          alt=""
          className="absolute w-[50px] h-[50px] left-[88%] top-[197px] animate-diagonalMove2"
        />
        <Image
          src={ballL1}
          alt=""
          className="absolute w-[50px] h-[50px] left-[17%] top-[1px] animate-diagonalMove"
        />
        <Image
          src={ballL2}
          alt=""
          className="absolute w-[35px] h-[35px] left-[6%] top-[41px] animate-diagonalMove"
        />
        <Image
          src={ballL3}
          alt=""
          className="absolute w-[50px] h-[50px] left-[9vh] top-[16%]"
        />
        <div className="text-center py-[120px]">
          <TopTitle
            header="CREATE, SELL, BUY"
            title="The new creative economy"
          />
          <button className="text-[20px] font-bold leading-5 py-[17px] px-[50px] border border-border rounded-full mt-[10px] transition-all duration-500 hover:bg-lightGreen hover:border-lightGreen">
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
                <p className="text-[20px] font-dmsans font-medium leading-[20px]">
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
              <h2 className="font-bold font-dmsans">1.00 ETH</h2>
              <p className="text-[#7A8293] text-[22px] font-bold my-[10px] leading-none">
                $2,767.77
              </p>
              <p className="text-[18px] text-text font-dmsans py-[15px]">
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
