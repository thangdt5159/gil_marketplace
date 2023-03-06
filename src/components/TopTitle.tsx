import React from "react";

const TopTitle = ({ header, title, des }: any) => {
  return (
    <section className="text-center md:max-w-[560px] mx-auto">
      <h5 className="text-lightGreen mb-[15px] md:mb-[10px] font-bold font-inter tracking-[3px] md:tracking-[1px] leading-[1.4em] text-[14px] md:text-base">
        {header}
      </h5>
      <h2
        className={`leading-[1.3em] text-[32px] md:text-[43px] ${
          header === "CREATE" ? "md:mb-[20px] mb-[10px]" : "md:mb-[30px] mb-[10px]"
        }`}
      >
        {title}
      </h2>
      {des && (
        <p className="text-des md:text-lightText text-base md:text-[19px] font-dmsans leading-[1.9em] pb-5">
          {des}
        </p>
      )}
    </section>
  );
};

export default TopTitle;
