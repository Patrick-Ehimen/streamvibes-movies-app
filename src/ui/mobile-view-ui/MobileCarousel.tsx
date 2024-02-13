import { Carousel } from "flowbite-react";
import { homeCarousel } from "../../constants";
import { FaArrowRight } from "react-icons/fa";

const MobileCarousel = () => {
  return (
    <section className="md:hidden mt-[50px] font-manrope mx-[20px]">
      <div className="h-[500px]">
        <Carousel slide={false}>
          {/* <div className=""> */}
          {homeCarousel.map((item) => (
            <div
              key={item.id}
              className="bg-[#262626] border border-[#999] p-[20px] rounded-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-96 pt-[15px] rounded-b-lg"
              />
              <div className="flex">
                <p className="text-white text-base py-4 font-bold">
                  {item.title}
                </p>
                <div className="flex cursor-pointer m-[8px] my-[20px] ">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          ))}
          {/* </div> */}
        </Carousel>
      </div>
    </section>
  );
};

export default MobileCarousel;
