import Image from "next/image";
import React from "react";

const Nft = ({ nft }: any) => {
  console.log(nft);

  return (
    <section className="bg-[#23262F] rounded-[20px] m-[10px] p-[15px]">
      <Image
        src={nft.image}
        alt=""
        width={250}
        height={250}
        className="rounded-[20px]"
      />
      <h3 className="text-[24px] font-bold mt-[1em] leading-[49px]">
        {nft.title}
      </h3>
      <p className="text-des font-semibold font-secondary">by {nft.creator}</p>
      <button className="font-bold border border-darkBlue text-darkBlue py-[10px] px-[30px] leading-[22px] rounded-full mt-5 transition-colors duration-500 hover:text-white hover:bg-darkBlue">
        Place a bid
      </button>
    </section>
  );
};

export default Nft;
