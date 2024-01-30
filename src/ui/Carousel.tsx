// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { useMediaQuery } from "@material-ui/core";
import { FaArrowRight } from "react-icons/fa";

interface CarouselProps {
  items: Array<{ id: number; img: string; title: string }>;
}

const CarouselMovieGenre: React.FC<CarouselProps> = ({ items }) => {
  return (
    <section className="mt-[50px] mx-[50px] justify-center font-manrope hidden md:flex ">
      {items.map((item, index) => (
        <div key={index} className="mx-[15px] bg-[#262626] p-3 rounded-lg ">
          <img src={item.img} alt={item.title} className="w-[150px] " />
          <div className="bg-gradient-to-b from-[#141414] h-[9px] flex " />{" "}
          <div className="flex">
            <h2>{item.title}</h2>
            <div className="flex justify-end my-[5px] ">
              <FaArrowRight />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CarouselMovieGenre;
