import { DesktopHeroImg, MobileHeroImg } from "../assets";
import { Button } from ".";

const Hero = () => {
  return (
    <section className=" -mt-[110p] z-0">
      <img src={DesktopHeroImg} alt="hero" className="hidden md:block" />
      <div className="bg-gradient-to-b from-[#141414] h-[30px] hidden md:flex " />

      {/* <div className="relative bg-fade-bottom">
        <img
          src={DesktopHeroImg}
          alt="hero"
          className="hidden md:block absolute inset-0"
        />
      </div> */}
      <img src={MobileHeroImg} alt="hero" className="md:hidden flex w-full" />
      <div className="bg-gradient-to-b from-[#141414] h-[30px] md:hidden flex " />

      <div className="flex flex-col items-center justify-center font-manrope ">
        <div className="md:text-[38px] text-[28px] font-bold text-center mx-[10px] -mt-[40px]">
          The Best Streaming Experience
        </div>
        <div className="mx-[200px] text-center hidden md:flex">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </div>
        <div className="md:hidden flex text-neutral-400 font-normal text-center mx-2 leading-[21px] text-sm">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere
        </div>
      </div>

      <Button text="Start Watching Now" />
    </section>
  );
};

export default Hero;
