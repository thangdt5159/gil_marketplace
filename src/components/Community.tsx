import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import circle from "../../public/images/circle.png";

const Community = () => {
  const imgRef = useRef<any>(null);
  const [imgInView, setImgInView] = useState<boolean>();

  useEffect(() => {
    const imgRefObserver = imgRef.current;
    const imgObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setImgInView(entry.isIntersecting);
      }
    });

    imgObserver.observe(imgRef.current);

    return () => imgObserver.unobserve(imgRefObserver);
  }, []);

  return (
    <section className="py-10 px-[10px] md:pb-10 md:pt-0 md:px-0">
      <div className="md:max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-[45%] text-center md:text-start px-[10px] md:px-0">
          <h5 className="text-lightGreen mb-[15px] md:mb-[10px] font-bold font-sans tracking-[3px] md:tracking-[1px] leading-[1.4em] text-[14px] md:text-base">
            OUR COMMUNITY
          </h5>
          <h2 className="text-[#eaeaea] text-[32px] md:text-[43px] leading-[1.3em] mb-4 md:mb-[25px]">
            Want to join the creative community?
          </h2>
          <p className="text-lightText text-base md:text-[19px] font-dmsans leading-[1.9em] pb-5">
            A non-fungible token is a unit of data stored on a digital ledger,
            called a blockchain, that certifies a digital asset to be unique and
            therefore not interchangeable. NFTs can be used to represent items
            such as photos, videos, audio, and other types of digital files.
          </p>
          <div className="my-[10px] md:mt-[40px] text-lightGreen font-bold text-[20px] flex items-center justify-center md:justify-start leading-[22px] tracking-[0.5px]">
            <span className="flex items-center pb-2 border-b border-lightGreen cursor-pointer transition-all duration-500 hover:text-white hover:border-white">
              Learn more
              <FaArrowRight className="ml-[5px]" />
            </span>
          </div>
        </div>
        <Image
          src={circle}
          alt=""
          className={`w-[70%] md:w-[55%] md:p-[80px] mb-5 md:mb-0 transition-all ease-linear duration-[1500ms] ${
            imgInView ? "scale-100" : "scale-0"
          }`}
          ref={imgRef}
        />
      </div>
    </section>
  );
};

export default Community;
