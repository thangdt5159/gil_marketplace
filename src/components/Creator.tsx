import Image from "next/image";
import React from "react";
import TopTitle from "./TopTitle";

const Creator = () => {
  const data = [
    {
      id: 1,
      image: "/images/creator/wallet.png",
      title: "Set up your wallet",
      des: "Praesent vel metus erat. Vivamus porttitor gravida arcu nec imperdiet.",
      sideImg: "/images/creator/line.png",
    },
    {
      id: 2,
      image: "/images/creator/picture.png",
      title: "Create collection",
      des: "Praesent vel metus erat. Vivamus porttitor gravida arcu nec imperdiet.",
      sideImg: "/images/creator/line.png",
    },
    {
      id: 3,
      image: "/images/creator/palette.png",
      title: "Add your NFT",
      des: "Praesent vel metus erat. Vivamus porttitor gravida arcu nec imperdiet.",
      sideImg: "/images/creator/line.png",
    },
    {
      id: 4,
      image: "/images/creator/money.png",
      title: "Start sale",
      des: "Praesent vel metus erat. Vivamus porttitor gravida arcu nec imperdiet.",
      sideImg: "/images/creator/line.png",
    },
  ];

  return (
    <section className="pb-[80px]">
      <div className="md:max-w-[1200px] mx-auto p-[10px] text-center">
        <div className="pt-[80px] px-5">
          <TopTitle
            header="CREATE"
            title="Want to become a creator?"
            des="Browse dozens of my other extraordinary art collections in the
          world’s largest NFT marketplace."
          />
        </div>
        <div className="mt-5 mb-10 md:flex justify-between items-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative md:flex justify-between items-center m-[25px] p-[10px]"
            >
              <div>
                <Image
                  src={item.image}
                  alt=""
                  width={80}
                  height={80}
                  className="mx-auto mb-5"
                />
                <h5 className="text-[20px] font-bold leading-[1.3em] tracking-[0.2px] mb-2">
                  {item.title}
                </h5>
                <p className="text-lightText font-dmsans">{item.des}</p>
              </div>
              <Image
                src={item.sideImg}
                alt=""
                width={120}
                height={30}
                className={`${
                  item.id === 4 && "hidden"
                } md:absolute md:-right-[35%] md:top-[22%]`}
              />
            </div>
          ))}
        </div>
        <button className="mt-[10px] text-[20px] font-bold tracking-[0.5px] border border-border rounded-full py-[17px] px-[50px] leading-[22px] transition-all duration-500 hover:bg-lightGreen hover:border-lightGreen">
          Start now
        </button>
      </div>
    </section>
  );
};

export default Creator;
