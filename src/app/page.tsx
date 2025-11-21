
import SchedulingCalender from "@/components/SchedulingCalender";
import Image from "next/image";
import BackgroundDesktopSVG1 from "../../public/assets/icons/Desktop-Vector-1.svg";
import BackgroundDesktopSVG2 from "../../public/assets/icons/Desktop-Vector-3.svg";
import BackgroundMobileSVG1 from "../../public/assets/icons/Mobile-Vector-1.svg";
import BackgroundMobileSVG2 from "../../public/assets/icons/Mobile-Vector-3.svg";
import Header from "@/components/Header";
import OurProcess from "../components/OurProcess";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div className="w-full max-w-[1364px] mx-auto">
        {/* Header */}
        <Header />

        <main className="w-full max-w-[1364px] mx-auto px-6 sm:px-0  relative ">
          {/* Background Images */}
          <Image
            src={BackgroundDesktopSVG1}
            alt="background"
            className="hidden md:block absolute top-[6%] left-[12%] w-[1200px] h-[1300px] object-contain -z-10"
          />
          <Image
            src={BackgroundDesktopSVG2}
            alt="background"
            className="hidden md:block absolute bottom-[17%] right-[13%] w-[1200px] h-[1200px] object-contain -z-10"
          />
          <Image
            src={BackgroundMobileSVG1}
            alt="background"
            className="block md:hidden absolute top-[2%] left-[1%] w-[380px] h-[2800px] object-contain -z-10"
          />
          <Image
            src={BackgroundMobileSVG2}
            alt="background"
            className="block md:hidden absolute bottom-[12%] right-[9%] w-[320px] h-[2000px] object-contain -z-20"
          />

          {/* Hero */}
          <Hero />
          {/* Our Process */}
          <OurProcess />

          {/* Calender */}
          <div className="w-full flex flex-col-reverse lg:flex-row justify-between gap-15 md:gap-3 px-10">
            <div className="md:min-w-[516px] flex flex-col items-center">
              {/* <SchedulingCalendar /> */}
              <SchedulingCalender />
            </div>
            <div className="w-full lg:max-w-[380px] xl:max-w-[580px] flex flex-col">
              <h2 className="text-primary font-poppins font-bold text-[21px] md:text-[24px] mb-4 ">
                SCHEDULE YOUR CALL WITH OUR TEAM
              </h2>
              <p className="text-white font-poppins font-bold text-[21px] md:text-[24px] mb-10">
                Get Pre-Qualified patients who show up — ready for treatment
              </p>
              <p className="text-white font-poppins font-bold text-[21px] md:text-[24px] mb-10">
                Tired of no-shows, unqualified leads, and wasted ad spend?
              </p>
              <p className="text-white font-poppins font-bold text-[21px] md:text-[24px] mb-10">
                In this 15-minute discovery call I’ll show exactly how Spine
                Shine Media delivers financially qualified patients straight to
                your practice — so you can stop chasing bad leads and focus on
                care.
              </p>

              <div className="mb-12">
                <h3 className="text-primary font-poppins font-bold text-2xl mb-10">
                  What we’ll cover:
                </h3>
                <ul className="list-disc list-inside ml-4">
                  <li className="text-white font-poppins font-bold text-2xl mb-4">
                    How we Pre-Qualify patients before they book, ready to pay.
                  </li>
                  <li className="text-white font-poppins font-bold text-2xl mb-4">
                    How we secure a card on file to cut no-shows and fill your
                    schedule with patients.
                  </li>
                  <li className="text-white font-poppins font-bold text-2xl mb-4">
                    How we manage 100% of your marketing and follow-ups.
                  </li>
                </ul>
              </div>

              <p className="text-white font-poppins font-bold text-[21px] md:text-[24px] mb-3">
                Ready to reclaim your schedule? Book your 15-minute call.
              </p>
              <p className="text-white font-poppins font-extrabold text-[24px] mb-10">
                (No pitch, just an informal chat to see if we can help you out
                in the first place)
              </p>
            </div>
          </div>

          {/* CTA */}
          <CTA />
        </main>
      </div>
      <div className="w-full bg-foreground flex items-center justify-center">
        <Footer />
      </div>
    </>
  );
}
