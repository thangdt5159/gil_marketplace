import Image from "next/image";
import React from "react";

const Nft = ({ nft }: any) => {
  return (
    <section className="bg-[#23262F] rounded-[20px] m-[10px] p-[15px] transition-all duration-300 hover:bg-[#1C1F28]">
      <Image
        src={nft.image}
        alt=""
        width={250}
        height={250}
        className="rounded-[20px] cursor-pointer w-full"
      />
      <h3 className="text-[24px] font-bold mt-[1em] leading-[49px] cursor-pointer tracking-[-0.022em]">
        {nft.title}
      </h3>
      <p className="text-des font-semibold font-dmsans">by {nft.creator}</p>
      <button className="font-bold border border-darkBlue text-darkBlue py-[10px] px-[30px] tracking-[0.5px] leading-[22px] rounded-full my-[10px] md:mt-5 transition-colors duration-500 hover:text-white hover:bg-darkBlue">
        Place a bid
      </button>
    </section>
  );
};

export default Nft;
