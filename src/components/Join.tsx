import React from "react";
import TopTitle from "./TopTitle";
import ballR1 from "../../public/images/header/ball-right1.png";
import ballR3 from "../../public/images/header/ball-right3.png";
import ballL1 from "../../public/images/header/ball-left1.png";
import ballL2 from "../../public/images/header/ball-left2.png";
import ballL3 from "../../public/images/header/ball-left3.png";
import Image from "next/image";

const Join = () => {
  return (
    <section className="pb-[60px]">
      <div className="relative md:max-w-[1200px] mx-auto text-center py-[100px]">
        <Image
          src={ballL2}
          alt=""
          className="absolute w-10 h-10 left-[78%] top-[73px]"
        />
        <Image
          src={ballR3}
          alt=""
          className="absolute w-[50px] h-[50px] left-[90%] top-[187px] animate-diagonalMove2"
        />
        <Image
          src={ballL3}
          alt=""
          className="absolute w-[30px] h-[30px] right-[52px] bottom-[73px]"
        />
        <Image
          src={ballR1}
          alt=""
          className="absolute w-[50px] h-[50px] left-[80%] top-[364px]"
        />
        <Image
          src={ballL1}
          alt=""
          className="absolute w-[50px] h-[50px] left-[11%] top-[94px] animate-diagonalMove"
        />
        <Image
          src={ballL3}
          alt=""
          className="absolute w-[50px] h-[50px] left-[28vh] top-[49%]"
        />
        <Image
          src={ballL1}
          alt=""
          className="absolute w-[30px] h-[30px] left-[15%] bottom-[62px] animate-diagonalMove"
        />
        <Image
          src={ballL2}
          alt=""
          className="ball-moving absolute w-[35px] h-[35px] left-[27%] top-[364px] animate-diagonalMove2"
        />
        <TopTitle
          header="CREATE, SELL, BUY"
          title="Join our creative community"
        />
        <button className="mt-[10px] text-[20px] font-bold tracking-[0.5px] border border-border rounded-full py-[17px] px-[50px] leading-[22px] transition-all duration-500 hover:bg-lightGreen hover:border-lightGreen">
          Start now
        </button>
      </div>
    </section>
  );
};

export default Join;
