import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Nft from "./Nft";
import TopTitle from "./TopTitle";

const Collection = () => {
  const data = [
    {
      id: 1,
      image: "/images/collection/collection-1.png",
      title: "Green thoughts",
      creator: "Paul Rojers",
    },
    {
      id: 2,
      image: "/images/collection/collection-2.png",
      title: "Sunny weather",
      creator: "Paul Rojers",
    },
    {
      id: 3,
      image: "/images/collection/collection-3.png",
      title: "Blue mood",
      creator: "Paul Rojers",
    },
  ];

  return (
    <section className="pb-10 md:pb-[100px]">
      <div className="md:max-w-[1200px] mx-auto p-[10px]">
        <TopTitle
          header="FEATURED COLLECTION"
          title="Enjoy the latest hot collection"
        />
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center pt-[10px]">
          {data.map((item) => (
            <div key={item.id} className="md:w-1/3 w-full">
              <Nft nft={item} />
            </div>
          ))}
        </div>
        <div className=" mt-5 mb-[10px] md:mt-[60px] text-lightPink font-bold text-[20px] flex items-center justify-center">
          <span className="flex items-center pb-2 border-b border-lightPink cursor-pointer transition-all duration-500 hover:text-white hover:border-white tracking-[0.5px] leading-[22px]">
            Browse more
            <FaArrowRight className="ml-[5px]" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Collection;
