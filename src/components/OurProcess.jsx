import React from "react";
import Image from "next/image";

const OurProcess = () => {
  return (
    <div
      className="relative z-10 md:z-0 bg-[linear-gradient(287.76deg,rgba(255,215,0,0.1105)_4.64%,rgba(255,215,0,0.0195)_98.6%)]
         w-full h-full max-h-[1500px] lg:max-h-[600px] rounded-md border-4 border-border  
         px-12 md:px-[78px] pt-12 pb-12 md:pb-[70px] mb-[80px] md:mb-[230px]
         overflow-hidden"
    >
      {/* gradient 1 */}
      <Image
        src="/assets/our-process-card-bg.svg"
        alt="bg"
        width={380}
        height={380}
        className="w-[480px] h-[480px] object-contain absolute top-[10%] lg:top-[30%] right-[5%] sm:right-[25%] lg:left-[-5%] -z-10"
      />
      {/* gradient 2 */}
      <Image
        src="/assets/our-process-card-bg.svg"
        alt="bg"
        width={380}
        height={380}
        className="w-[480px] h-[480px] object-contain absolute top-[40%] lg:top-[30%] right-[5%] sm:right-[25%] lg:left-[33%] -z-10"
      />
      {/* gradient 3 */}
      <Image
        src="/assets/our-process-card-bg.svg"
        alt="bg"
        width={380}
        height={380}
        className="w-[480px] h-[480px] object-contain absolute top-[70%] lg:top-[30%] right-[20%] lg:right-[-5%] -z-10"
      />
      {/* Content */}
      <h2 className="text-center font-poppins font-extrabold text-[32px] text-white mb-12 md:mb-[78px]">
        Our Process
      </h2>
      <div className="ProcessCard-Container w-full flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-6 relative">
        {/* process 1 */}
        <div className="card-1 flex flex-col items-center gap-10 z-10 h-full max-h-[280px] relative overflow-visible">
          <Image
            src={"/assets/icons/Rocket.svg"}
            alt="logo"
            width={110}
            height={110}
            className="w-[110px] h-[110px] object-contain"
          />
          <h3 className="w-full max-w-[200px] text-center font-poppins font-extrabold text-[18px] md:text-[22px] text-white">
            Grow your practice with a custom program
          </h3>
          {/* gradient 1 */}
          <Image
            src="/assets/our-process-card-bg.svg"
            alt="bg"
            width={380}
            height={380}
            className="w-[480px] h-[480px] object-contain absolute bottom-[-70%] left-0 -z-10"
          />
        </div>
        {/* Arrow Right (Desktop) */}
        <Image
          src={"/assets/icons/arrow-right.svg"}
          alt="logo"
          width={331}
          height={6}
          className="hidden lg:block w-full max-w-[200px] xl:max-w-[321px] h-6px mb-[140px]"
        />
        {/* Arrow Down mobile */}
        <Image
          src={"/assets/icons/arrow-down-yellow.svg"}
          alt="logo"
          width={6}
          height={77}
          className="block lg:hidden w-[76px] h-[60px]"
        />
        {/* process 2 */}
        <div className="card-2 flex flex-col items-center gap-10 z-10 h-full max-h-[250px] relative">
          <Image
            src={"/assets/icons/Scale.svg"}
            alt="logo"
            width={110}
            height={110}
            className="w-[110px] h-[110px] object-contain"
          />
          <h3 className="w-full max-w-[200px] text-center font-poppins font-extrabold text-[18px] md:text-[22px] text-white">
            Win more patients with personalized video
          </h3>
          {/* gradient 1 */}
          <Image
            src="/assets/our-process-card-bg.svg"
            alt="bg"
            width={380}
            height={380}
            className="w-[480px] h-[480px] object-contain absolute bottom-[-70%] left-0 -z-10"
          />
        </div>

        {/* Arrow Right (Desktop) */}
        <Image
          src={"/assets/icons/arrow-right.svg"}
          alt="logo"
          width={331}
          height={6}
          className="hidden lg:block w-full max-w-[200px] xl:max-w-[321px] h-6px mb-[140px]"
        />
        {/* Arrow Down mobile */}
        <Image
          src={"/assets/icons/arrow-down-yellow.svg"}
          alt="logo"
          width={6}
          height={77}
          className="block lg:hidden w-[76px] h-[60px]"
        />
        {/* process 3 */}
        <div className="card-3 flex flex-col items-center gap-10 z-10 h-full max-h-[250px] relative">
          <Image
            src={"/assets/icons/Cycle.svg"}
            alt="logo"
            width={110}
            height={110}
            className="w-[110px] h-[110px] object-contain"
          />
          <h3 className="w-full max-w-[200px] text-center font-poppins font-extrabold text-[18px] md:text-[22px] text-white">
            Monitor KPIs to grow your practice
          </h3>
          {/* gradient 1 */}
          <Image
            src="/assets/our-process-card-bg.svg"
            alt="bg"
            width={380}
            height={380}
            className="w-[480px] h-[480px] object-contain absolute bottom-[-70%] left-0 -z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
