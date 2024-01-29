import { useState } from "react";
import {
  DesktopHeroImg,
  MobileHeroImg,
  PlayIcon,
  LoadDesktopHeroImg,
  LoadMobileHeroImg,
} from "../assets";
import { Button } from ".";

const Hero = () => {
  const [desktopLoaded, setDesktopLoaded] = useState(false);
  const [mobileLoaded, setMobileLoaded] = useState(false);

  const handleDesktopImageLoad = () => {
    setDesktopLoaded(true);
  };

  const handleMobileImageLoad = () => {
    setMobileLoaded(true);
  };

  return (
    <section className=" -mt-[110p] z-0">
      {desktopLoaded ? (
        <img
          src={DesktopHeroImg}
          alt="hero"
          className="hidden md:block"
          onLoad={handleDesktopImageLoad}
        />
      ) : (
        <img src={LoadDesktopHeroImg} alt="hero" className="hidden md:block" />
      )}
      <div className="bg-gradient-to-b from-[#141414] h-[30px] hidden md:flex " />

      {mobileLoaded ? (
        <img
          src={MobileHeroImg}
          alt="hero"
          className="md:hidden flex w-full"
          onLoad={handleMobileImageLoad}
        />
      ) : (
        <img
          src={LoadMobileHeroImg}
          alt="hero"
          className="md:hidden flex w-full"
        />
      )}
      <div className="bg-gradient-to-b from-[#141414] h-[30px] md:hidden flex " />

      <div className="flex flex-col items-center justify-center font-manrope">
        <div className="md:text-[38px] text-[28px] font-bold text-center mx-[10px] -mt-[40px]">
          The Best Streaming Experience
        </div>
        <div className="lg:mx-[150px] mx-[100px] text-center hidden md:flex mt-[10px]">
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
        <Button image={PlayIcon} text="Start Watching Now" />
      </div>
    </section>
  );
};

export default Hero;
