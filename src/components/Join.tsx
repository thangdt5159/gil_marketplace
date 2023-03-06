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
    <section className="py-[60px] px-5 md:pb-[60px]">
      <div className="relative md:max-w-[1200px] mx-auto text-center md:py-[100px]">
        <Image
          src={ballL2}
          alt=""
          className="absolute w-5 h-5 md:w-10 md:h-10 md:left-[78%] left-[90%] md:top-[73px] top-[-10px]"
        />
        <Image
          src={ballR3}
          alt=""
          className="absolute w-[25px] h-[25px] md:w-[50px] md:h-[50px] md:left-[90%] left-[82%] md:top-[187px] top-[-60px] animate-diagonalMove2"
        />
        <Image
          src={ballL3}
          alt=""
          className="absolute w-[30px] h-[30px] md:right-[52px] right-0 md:bottom-[73px] bottom-[50px]"
        />
        <Image
          src={ballR1}
          alt=""
          className="absolute w-5 h-5 md:w-[50px] md:h-[50px] left-[80%] md:top-[364px] top-[208px]"
        />
        <Image
          src={ballL1}
          alt=""
          className="absolute w-[30px] h-[30px] md:w-[50px] md:h-[50px] md:left-[11%] left-0 md:top-[94px] -top-5 animate-diagonalMove"
        />
        <Image
          src={ballL3}
          alt=""
          className="absolute w-[30px] h-[30px] md:w-[50px] md:h-[50px] md:left-[28vh] md:top-[49%] top-[43%]"
        />
        <Image
          src={ballL1}
          alt=""
          className="absolute w-5 h-5 md:w-[30px] md:h-[30px] md:left-[15%] left-[5%] md:bottom-[62px] bottom-[30px] animate-diagonalMove"
        />
        <Image
          src={ballL2}
          alt=""
          className="ball-moving absolute w-[25px] h-[25px] md:w-[35px] md:h-[35px] md:left-[27%] left-[8%] md:top-[364px] top-[199px] animate-diagonalMove2"
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
