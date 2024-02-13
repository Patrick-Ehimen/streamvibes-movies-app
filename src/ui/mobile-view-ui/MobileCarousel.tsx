import { Carousel } from "flowbite-react";
import { homeCarousel } from "../../constants";

const MobileCarousel = () => {
  return (
    <section className="md:hidden mt-[50px] font-manrope mx-[20px]">
      <div className="h-[500px]">
        <Carousel slide={false}>
          {/* <div className=""> */}
          {homeCarousel.map((item) => (
            <div key={item.id} className="bg-[#262626] p-[20px] rounded-b-xl">
              <img
                src={item.img}
                alt={item.title}
                className="w-96 pt-[15px] rounded-lg"
              />
              <p className="text-white text-base py-4 font-bold">
                {item.title}
              </p>
            </div>
          ))}
          {/* </div> */}
        </Carousel>
      </div>
    </section>
  );
};

export default MobileCarousel;
