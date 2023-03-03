import { url } from "inspector";
import Image from "next/image";
import React from "react";
import flame from "../../public/images/explore/flame.png";
import Nft from "./Nft";
import { FaArrowRight } from "react-icons/fa";
import TopTitle from "./TopTitle";

const TopItems = () => {
  const data = [
    {
      id: 1,
      image: "/images/nft/nft-1.png",
      title: "Expressions",
      creator: "Paul Rojers",
    },
    {
      id: 2,
      title: "The wall",
      image: "/images/nft/nft-2.png",
      creator: "Dora Anderson",
    },
    {
      id: 3,
      title: "Angry bear",
      image: "/images/nft/nft-3.png",
      creator: "Mike Green",
    },
    {
      id: 4,
      title: "Gasoline",
      image: "/images/nft/nft-4.png",
      creator: "Kate Gray",
    },
  ];

  return (
    <section className="py-[80px]">
      <div className="md:max-w-[1200px] mx-auto border-t border-[#6369775E] p-[10px]">
        <div className="pt-[80px] pb-5 text-center">
          <Image
            src={flame}
            alt=""
            className="w-[42px] h-[42px] mx-auto mb-5"
          />
          <TopTitle header="TOP ITEMS" title="Explore awesome artworks" />
        </div>
        <div className="flex justify-between items-center">
          {data.map((item) => (
            <div key={item.id} className="w-1/4">
              <Nft nft={item} />
            </div>
          ))}
        </div>
        <div className="mt-[60px] text-lightPink font-bold text-[20px] flex items-center justify-center">
          <span className="flex items-center pb-2 border-b border-lightPink cursor-pointer transition-all duration-500 hover:text-white hover:border-white tracking-[0.5px]">
            Brower more
            <FaArrowRight className="ml-[5px]" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default TopItems;
