import React from "react";
import Image from "next/image";
import ScrollButton from "./ScrollButton";

const Hero = () => {
  return (
    <div className="w-full flex md:items-center flex-col md:flex-row gap-[160px] md:gap-10 mb-[80px] md:mb-[188px] px-10 xl:px-[144px]">
      <div className="w-full md:w-1/2 max-w-[339px] md:max-w-[636px] flex flex-col">
        {/* Gradeint Text */}
        <div className="relative">
          {/* Text */}
          <h1 className="font-poppins font-[900] text-[21px] md:text-[30px] text-primary mb-3 relative z-[20]">
            Advanced DC <span className="text-white"> & </span> Medical Clinics{" "}
            <br /> looking for high quality patients...
          </h1>

          {/* Gradient overlay */}
          <div className="absolute inset-0 pointer-events-none z-[15] bg-[radial-gradient(50%_50%_at_50.79%_43.27%,rgba(0,0,0,0.2226)_0%,rgba(0,0,0,0)_100%)]"></div>

          {/* Background text image */}
          <Image
            src={"/assets/Hero-text-bg.svg"}
            alt="hero text-bg"
            width={520}
            height={280}
            className="absolute top-0 right-0 w-[520px] h-[280px] object-contain z-[10]"
          />
        </div>

        <h3 className="font-poppins font-extrabold text-[25px] md:text-[30px] text-white leading-[160%] mb-10">
          10-40 <br /> Qualified <br /> Serious & Income Verified <br />{" "}
          Patients—Every Single Month <br />
          We have an ROI Guarantee—Or It's FREE.
        </h3>

        {/* CTA */}
        <div className="w-full max-w-[280px] flex flex-col items-center md:items-start">
          <ScrollButton />

          <div className="flex items-center gap-2   mt-[52px]">
            <p className="font-poppins text-[18px] text-white tracking-[6.08px] md:tracking-[12.08px]">
              SCROLL NOW
            </p>
            <Image
              src="/assets/icons/arrow-down.svg"
              alt="arrow"
              width={18}
              height={12}
              className="w-[18px] h-[12px] object-contain"
            />
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="w-full md:w-1/2 flex flex-col items-center h-full max-h-[700px] relative">
        <Image
          src={"/assets/Hero-Images-desktop.svg"}
          alt="hero image"
          width={477}
          height={637}
          className="hidden md:block w-[313px] md:w-[477px] h-[637px] object-contain"
        />
        <Image
          src={"/assets/Hero-Images-mobile.svg"}
          alt="hero image"
          width={477}
          height={637}
          className="block md:hidden w-[313px] md:w-[477px] h-[637px] object-contain"
        />
        <Image
          src={"/assets/4Stars.svg"}
          alt="hero"
          width={212}
          height={292}
          className="w-[82px] h-[82px] object-contain absolute top-[-10%] md:top-[-10%] right-[0%]"
        />
      </div>
    </div>
  );
};

export default Hero;
