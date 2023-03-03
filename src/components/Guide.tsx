import React from "react";
import TopTitle from "./TopTitle";
import guideBg from "../../public/images/guide-bg.png";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const Guide = () => {
  return (
    <section className="pt-[100px] pb-[80px]">
      <div className="md:max-w-[1200px] mx-auto">
        <div className="mx-[20px]">
          <TopTitle
            header="GUIDE"
            title="How to create NFT"
            des="Browse dozens of my other extraordinary art collections in the world’s largest NFT marketplace."
          />

          <div className="pt-10 pb-[60px]">
            <div className="relative bg-guideBg bg-no-repeat bg-cover bg-center py-[290px] w-full flex justify-center rounded-[40px]">
              <div className="w-[90px] h-[90px] bg-[#1A1A1A] rounded-full flex justify-center items-center cursor-pointer transition-all duration-500 hover:bg-white hover:text-black hover:scale-110">
                <FaPlay className="text-[24px]" />
              </div>
              <div className="absolute border-[3px] border-[#1A1A1A] w-[90px] h-[90px] rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
