import { FaArrowRight } from "react-icons/fa";

interface CarouselProps {
  items: Array<{ id: number; img: string; title: string }>;
}

const MobileCarousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <div className="">
      <section className="overflow-x-auto mt-[50px] font-manrope md:hidden flex  ">
        {items.map((item, index) => (
          <div
            key={index}
            className="mr-[10px] ml-[20px] bg-[#262626] p-3 rounded-lg w-[200px] px-[20px]   "
          >
            <img
              src={item.img}
              alt={item.title}
              className={`w-[500px] ${
                index === 0 || index === 3 || index === 4 ? "w-[200px]" : ""
              }`}
            />
            <div className="bg-gradient-to-b from-[#141414] h-[9px] flex" />{" "}
            <div className="flex">
              <h2>{item.title}</h2>
              <div className="flex justify-end my-[5px] ">
                <FaArrowRight />
              </div>
            </div>
          </div>
        ))}
      </section>
      {/* <img src={ActionCarousel} className="w-[] " /> */}
    </div>
  );
};

export default MobileCarousel;
