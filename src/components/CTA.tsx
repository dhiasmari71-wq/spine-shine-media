import Image from "next/image";

const CTA = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-[347px] md:max-w-[577px] h-[377px] md:h-[412px] flex flex-col items-center mt-[324px] md:mt-[190px] mb-[100px]">
        <div className="w-full max-w-[577px] min-h-[412px] rounded-[20px] bg-[linear-gradient(135.37deg,rgba(255,215,0,0.27)_0%,rgba(255,215,0,0.04)_100%)] border-4 border-border pt-6 px-10 pb-[70px]">
          <h1 className="text-primary font-poppins font-bold text-[35px] md:text-[49px] mb-2 bg-transparent">
            Have A General Inquiry?
          </h1>
          <p className="text-white font-poppins font-regular text-[16px] md:text-[20px] bg-transparent">
            If you have a general inquiry and would like to speak to our expert
            team, you can contact us via email at:
          </p>
          <div className="flex items-center gap-2 bg-transparent mt-5  text-wrap">
            <Image
              src={"/assets/icons/email.svg"}
              alt="logo"
              width={24}
              height={24}
              className="w-[16px] md:w-[24px] h-[16px] md:h-[24px] object-contain bg-transparent"
            />
            <p className="text-white font-regular sm:text-[12px] text-[16px] bg-transparent">
              spineshinemedia@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
