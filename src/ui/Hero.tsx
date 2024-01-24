import { DesktopHeroImg, MobileHeroImg } from "../assets";
const Hero = () => {
  return (
    <section className=" -mt-[110p] z-0">
      <img src={DesktopHeroImg} alt="hero" className="hidden md:block" />
      <img src={MobileHeroImg} alt="hero" className="md:hidden block w-full" />

      <div>
        <div className=" items-center">
          <div className="text-[38px] ml-[300px] -mt-[50px]">
            The Best Streaming Experience
          </div>
          <div>
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
