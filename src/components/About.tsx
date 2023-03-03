import Image from "next/image";
import React from "react";
import gradientCircle from "../../public/images/gradient-circle.png";

const About = () => {
  return (
    <section className="py-[100px]">
      <div className="md:max-w-[1200px] mx-auto md:flex justify-between items-center">
        <div className="relative w-[55%]">
          <div className="relative m-10 text-lightPink font-semibold">
            {/* <svg className="w-full h-[500px] border" viewBox="0 0 1400 1400">
             
                <path
                  id="circle-1"
                  d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5"
                />
             
            </svg> */}

            {/* <svg viewBox="0 0 500 500">
              <path
                id="curve"
                d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                style={{ fill: "red" }}
              />
              <text width="500">
                <textPath href="#curve">curved text</textPath>
              </text>
            </svg> */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-25 -25 300 300"
              overflow={"visible"}
              className="w-full h-[500px] "
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
                  style={{ fontSize: "22px", wordSpacing: "20px" }}
                  className="animate-"
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
            className="absolute w-[45%] rounded-full top-0 bottom-0 right-0 left-0 m-auto"
          />
        </div>
        <div className="w-[45%] p-[10px]">
          <h5 className="text-lightGreen mb-[10px] font-bold font-sans tracking-[1px] leading-[1.4em]">
            ABOUT NFT
          </h5>
          <h2 className="text-[#eaeaea] leading-[1.3em] mb-[25px]">
            Why do you need to buy NFT?
          </h2>
          <p className="text-lightText text-[19px] font-dmsans leading-[1.9em] pb-5">
            A non-fungible token is a unit of data stored on a digital ledger,
            called a blockchain, that certifies a digital asset to be unique and
            therefore not interchangeable. NFTs can be used to represent items
            such as photos, videos, audio, and other types of digital files.
          </p>
          <button className="mt-[10px] text-[20px] font-bold tracking-[0.5px] border border-border rounded-full py-[17px] px-[50px] leading-[22px] transition-all duration-500 hover:bg-lightGreen hover:border-lightGreen">
            Start now
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
