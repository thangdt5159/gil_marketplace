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
    <section className="md:pt-[80px] px-5 md:px-0">
      <div className="relative md:max-w-[1200px] mx-auto">
        <Image
          src={ballR1}
          alt=""
          className="absolute w-[30px] md:w-10 h-[30px] md:h-10 md:left-[80%] left-[92%] md:top-0 top-[20px]"
        />
        <Image
          src={ballR2}
          alt=""
          className="absolute w-[30px] md:w-[50px] h-[30px] md:h-[50px] md:right-[10px] right-0 md:top-[83px] top-[153px] animate-diagonalMove"
        />
        <Image
          src={ballR3}
          alt=""
          className="absolute w-[30px] md:w-[50px] h-[30px] md:h-[50px] md:left-[88%] left-[78%] md:top-[197px] top-[250px] animate-diagonalMove2"
        />
        <Image
          src={ballL1}
          alt=""
          className="absolute w-[20px] md:w-[50px] h-[20px] md:h-[50px] md:left-[17%] left-[2%] md:top-[1px] top-[144px] animate-diagonalMove"
        />
        <Image
          src={ballL2}
          alt=""
          className="absolute w-[25px] md:w-[35px] h-[25px] md:h-[35px] left-[6%] top-[41px] animate-diagonalMove"
        />
        <Image
          src={ballL3}
          alt=""
          className="absolute w-[30px] md:w-[50px] h-[30px] md:h-[50px] md:left-[9vh] left-[1%] md:top-[16%] top-[210px]"
        />
        <div className="text-center md:py-[120px] pt-[60px] pb-5">
          <TopTitle
            header="CREATE, SELL, BUY"
            title="The new creative economy"
          />
          <button className="text-[20px] font-bold leading-5 tracking-[0.5px] py-[17px] px-[50px] border border-border rounded-full my-[10px] md:mt-[10px] transition-all duration-500 hover:bg-lightGreen hover:border-lightGreen">
            Start now
          </button>
        </div>
        <div className="md:max-w-[1140px] mx-auto md:flex">
          <Image
            src={hNft}
            alt=""
            className="md:w-1/2 md:rounded-[20px] rounded-[30px] p-[10px] mt-[50px] md:mt-0"
          />
          <div className="md:px-[80px]">
            <h1 className="text-[34px] my-5 md:mt-0 md:text-[54px] font-bold leading-[1.3em] md:leading-[72px] md:mb-[50px]">
              The cartoon monster <sup>Ⓡ</sup>
            </h1>
            <div className="flex items-center justify-between mb-[30px]">
              <div className="w-1/5 md:w-[17%]">
                <Image
                  src={hCreator}
                  alt=""
                  className="rounded-full w-[50px] h-[50px]"
                />
              </div>
              <div className="w-[40%] md:w-[34%]">
                <h5 className="text-des mb-[10px] leading-none font-bold">
                  Creator
                </h5>
                <p className="text-[20px] font-dmsans font-medium leading-[20px]">
                  Paul Rojers
                </p>
              </div>
              <div className="w-[40%] md:w-1/2 text-end flex justify-end items-center">
                <FaInstagram className="w-[30px] h-[30px]" />
                <FaBehance className="w-[30px] h-[30px] ml-[30px] mr-[12px] md:mx-[30px]" />
              </div>
            </div>
            <div className="bg-[#23262F] rounded-[30px] py-10 px-5 text-center">
              <p className="text-[22px] font-semibold mb-[10px]">Current bid</p>
              <h2 className="font-bold font-dmsans text-[34px] md:text-[43px] leading-[1.3em]">
                1.00 ETH
              </h2>
              <p className="text-[#7A8293] text-[22px] font-bold my-[10px] leading-none">
                $2,767.77
              </p>
              <p className="text-base md:text-[18px] text-text font-dmsans py-[15px]">
                A non-fungible token is a unit of data stored on a digital
                ledger.
              </p>
              <button className="bg-darkBlue font-bold text-[20px] py-[17px] px-[50px] rounded-full md:w-full leading-tight tracking-[0.5px] my-[10px] md:mt-[10px] transition-colors duration-500 hover:bg-[#36bb91]">
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
