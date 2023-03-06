import Image from "next/image";
import React from "react";
import gradientCircle from "../../public/images/gradient-circle.png";

const About = () => {
  return (
    <section className="md:py-[100px] px-[10px] pt-10 pb-[60px] md:px-0">
      <div className="md:max-w-[1200px] mx-auto md:flex justify-between items-center">
        <div className="relative md:w-[55%]">
          <div className="relative m-10 mb-0 md:mb-10 text-lightPink font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-25 -25 300 300"
              overflow={"visible"}
              className="w-full md:h-[500px] animate-rotate uppercase"
            >
              <path
                d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                id="e-path"
              ></path>
              <text>
                <textPath
                  id="e-text-path"
                  href="#e-path"
                  startOffset="0%"
                  fill="#FE84F1"
                  className="text-[18px] md:text-[22px] [word-spacing:20px]"
                >
                  New way to value artworks. Collect rare and extraordinary
                  pieces of art{" "}
                </textPath>
              </text>
            </svg>
          </div>
          <Image
            src={gradientCircle}
            alt=""
            className="absolute w-[40%] md:w-[45%] rounded-full top-0 bottom-0 right-0 left-0 m-auto"
          />
        </div>
        <div className="md:w-[45%] md:p-[10px] px-[10px] text-center md:text-start">
          <h5 className="text-lightGreen mb-[10px] font-bold font-sans tracking-[3px] md:tracking-[1px] leading-[1.4em] text-[14px] md:text-base">
            ABOUT NFT
          </h5>
          <h2 className="text-[#eaeaea] text-[32px] md:text-[43px] leading-[1.3em] mb-4 md:mb-[25px]">
            Why do you need to buy NFT?
          </h2>
          <p className="text-lightText text-base md:text-[19px] font-dmsans leading-[1.9em] pb-5">
            A non-fungible token is a unit of data stored on a digital ledger,
            called a blockchain, that certifies a digital asset to be unique and
            therefore not interchangeable. NFTs can be used to represent items
            such as photos, videos, audio, and other types of digital files.
          </p>
          <button className="my-[10px] md:mt-[10px] text-[20px] font-bold tracking-[0.5px] border border-border rounded-full py-[17px] px-[50px] leading-[22px] transition-all duration-500 hover:bg-lightGreen hover:border-lightGreen">
            Start now
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
