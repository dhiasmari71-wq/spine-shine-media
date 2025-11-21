import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full max-w-[1364px] flex flex-col md:flex-row gap-5 items-center justify-between px-6 sm:px-12 pb-10 md:pb-0">
      <Image
        src={"/assets/icons/FooterLogo.svg"}
        alt="logo"
        width={70}
        height={70}
        className="w-[70px] h-[70px] object-contain bg-transparent"
      />
      <h2 className="text-white font-poppins font-normal text-[18px] bg-transparent">
        Spine Shine Media
      </h2>
      <div className="flex items-center gap-2 bg-transparent">
        <Image
          src={"/assets/icons/social-x.svg"}
          alt="logo"
          width={24}
          height={24}
          className="w-[16px] h-[16px] object-contain bg-transparent"
        />
        <Image
          src={"/assets/icons/social-fb.svg"}
          alt="logo"
          width={24}
          height={24}
          className="w-[16px] h-[16px] object-contain bg-transparent"
        />
        <Image
          src={"/assets/icons/social-linkedin.svg"}
          alt="logo"
          width={24}
          height={24}
          className="w-[16px] h-[16px] object-contain bg-transparent"
        />
      </div>
    </div>
  );
};

export default Footer;
