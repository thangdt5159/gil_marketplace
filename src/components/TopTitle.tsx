import React from "react";

const TopTitle = ({ header, title, des }: any) => {
  return (
    <section className="text-center md:max-w-[560px] mx-auto">
      <h5 className="text-lightGreen mb-[10px] font-bold font-inter tracking-[1px] leading-[1.4em]">
        {header}
      </h5>
      <h2
        className={`leading-[1.3em] ${
          header === "CREATE" ? "mb-[20px]" : "mb-[30px]"
        }`}
      >
        {title}
      </h2>
      {des && (
        <p className="text-lightText text-[19px] font-dmsans leading-[1.9em] pb-5">
          {des}
        </p>
      )}
    </section>
  );
};

export default TopTitle;
