import Image from "next/image";
import LogoBG from "../../public/assets/icons/logo-bg.svg";

const Header = () => {
  return (
    <nav className="w-full max-w-[1364px] px-0 ml-10 sm:ml-5 xl:ml-20 mb-10 relative">
      <Image
        src={LogoBG}
        alt="background"
        className="absolute bottom-[0%] left-[0%] w-full max-w-[658px] h-[188px] object-contain -z-10"
      />
      <div className="flex items-center">
        <Image
          src={"/assets/Logo-2.svg"}
          alt="logo"
          width={188}
          height={188}
          className="w-[90px] md:w-[188px] h-[188px] object-contain"
        />
        <h1 className="font-poppins font-[900] text-[24px] text-white">
          Spine Shine Media
        </h1>
      </div>
    </nav>
  );
};

export default Header;
