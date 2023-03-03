import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import circle from "../../public/images/circle.png";

const Community = () => {
  return (
    <section className="pb-10">
      <div className="md:max-w-[1200px] mx-auto md:flex justify-between items-center">
        <div className="w-[45%]">
          <h5 className="text-lightGreen mb-[10px] font-bold font-sans tracking-[1px] leading-[1.4em]">
            OUR COMMUNITY
          </h5>
          <h2 className="text-[#eaeaea] leading-[1.3em] mb-[25px]">
            Want to join the creative community?
          </h2>
          <p className="text-lightText text-[19px] font-dmsans leading-[1.9em] pb-5">
            A non-fungible token is a unit of data stored on a digital ledger,
            called a blockchain, that certifies a digital asset to be unique and
            therefore not interchangeable. NFTs can be used to represent items
            such as photos, videos, audio, and other types of digital files.
          </p>
          <div className="mt-[40px] text-lightGreen font-bold text-[20px] flex items-center">
            <span className="flex items-center pb-2 border-b border-lightGreen cursor-pointer transition-all duration-500 hover:text-white hover:border-white">
              Learn more
              <FaArrowRight className="ml-[5px]" />
            </span>
          </div>
        </div>
        <Image src={circle} alt="" className="w-[55%] p-[80px]" />
      </div>
    </section>
  );
};

export default Community;
