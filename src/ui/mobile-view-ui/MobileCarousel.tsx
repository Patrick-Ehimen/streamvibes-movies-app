import { FaArrowRight } from "react-icons/fa";

interface CarouselProps {
  items: Array<{ id: number; img: string; title: string }>;
}

const MobileCarousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <section className="overflow-x-auto mt-[50px] mx-[] font-manrope md:hidden flex ">
      {items.map((item, index) => (
        <div
          key={index}
          className="mx-[10px] bg-[#262626] p-3 rounded-lg w-[200px] "
        >
          <img src={item.img} alt={item.title} className="w-[300px]" />
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
  );
};

export default MobileCarousel;
