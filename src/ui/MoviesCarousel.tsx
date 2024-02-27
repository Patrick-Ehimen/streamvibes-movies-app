import {
  Avengers,
  Kantara,
  Stranger,
  // Peaky,
  MobAvenger,
  MobKantara,
  MobStranger,
  // MobPeaky,
} from "../assets";

const carouselArr = [
  { id: 1, img: Avengers, img2: MobAvenger, title: "Avengers: Endgame" },
  { id: 2, img: Kantara, img2: MobKantara, title: "Kantara" },
  { id: 3, img: Stranger, img2: MobStranger, title: "Stranger Things" },
  // { id: 4, img: Peaky, img2: MobPeaky },
];

const MoviesCarousel = () => {
  return (
    <section className="mt-[150px] md:mx-[50px] mx-[20px] mb-[10px] relative">
      <div className="carousel w-full relative z-10">
        {carouselArr.map((item, index) => (
          <div
            id={`slide${index + 1}`}
            className="carousel-item relative w-full"
            key={item.id}
          >
            <div className="hidden md:flex">
              <img
                src={item.img}
                className={`${index === 3 ? "rounded-lg" : ""} w-full`}
              />
            </div>
            <div className="md:hidden">
              <img
                src={item.img2}
                className={`${index === 3 ? "rounded-lg" : ""} w-full`}
              />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${index === 0 ? carouselArr.length : index}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${
                  index === carouselArr.length - 1 ? 1 : index + 2
                }`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-red-400 z-30 -mt-[50px] cool absolute left-36">
        ABCCDDS
      </div>
    </section>
  );
};

export default MoviesCarousel;
