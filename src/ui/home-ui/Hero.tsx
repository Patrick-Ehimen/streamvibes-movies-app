import { useEffect, useState } from "react";
import {
  DesktopHeroImg,
  MobileHeroImg,
  PlayIcon,
  LoadDesktopHeroImg,
  LoadMobileHeroImg,
} from "../../assets";
import { Button } from "..";

const Hero = () => {
  const [desktopLoaded, setDesktopLoaded] = useState(false);
  const [mobileLoaded, setMobileLoaded] = useState(false);

  useEffect(() => {
    // Load desktop image
    const desktopImage = new window.Image(); // Creating a new image object for the desktop version
    desktopImage.src = DesktopHeroImg; // Setting the source of the desktop image
    desktopImage.onload = () => setDesktopLoaded(true); // Setting the desktop image to loaded when it's fully loaded

    // Load mobile image
    const mobileImage = new window.Image(); // Creating a new image object for the mobile version
    mobileImage.src = MobileHeroImg; //Setting the source of the image
    mobileImage.onload = () => setMobileLoaded(true); // Setting the mobile image to loaded when it's fully loaded
  }, []);

  return (
    <section className=" -mt-[110p] z-0">
      {desktopLoaded ? ( // Check if desktop image is loaded
        <img src={DesktopHeroImg} alt="hero" className="hidden md:block" /> // Display desktop image if loaded
      ) : (
        <img src={LoadDesktopHeroImg} alt="hero" className="hidden md:block" /> // Display placeholder for desktop image if not loaded
      )}
      <div className="bg-gradient-to-b from-[#141414] h-[30px] hidden md:flex " />{" "}
      {/* Background gradient for desktop */}
      {mobileLoaded ? ( // Check if mobile image is loaded
        <img src={MobileHeroImg} alt="hero" className="md:hidden flex w-full" /> // Display mobile image if loaded
      ) : (
        <img
          src={LoadMobileHeroImg} // Display placeholder for mobile image if not loaded
          alt="hero"
          className="md:hidden flex w-full"
        />
      )}
      <div className="bg-gradient-to-b from-[#141414] h-[30px] md:hidden flex " />{" "}
      {/* Background gradient for mobile */}
      <div className="flex flex-col items-center justify-center font-manrope">
        <div className="md:text-[38px] text-[28px] font-bold text-center mx-[10px] -mt-[40px]">
          The Best Streaming Experience
        </div>
        <div className="lg:mx-[150px] mx-[100px] text-center hidden md:flex mt-[10px] text-neutral-400 text-base">
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
        {/* Button to start watching */}
        <Button image={PlayIcon} text="Start Watching Now" />
      </div>
    </section>
  );
};

export default Hero;
