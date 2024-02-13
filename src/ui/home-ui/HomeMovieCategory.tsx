import { HomeCarousel } from "../index";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Define the HomeMovieCategory functional component
const HomeMovieCategory = () => {
  return (
    <section>
      <div className="flex flex-row md:ml-[100px] mx-[20px] mt-[100px]">
        <div className="flex flex-col">
          <div className="flex text-[28px] font-bold">
            Explore our wide variety of categories
          </div>
          <p className="text-neutral-400 text-base font-normal">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>

        <div className="mx-[50px] flex h-14 hidden md:flex border border-[#262626] rounded-lg bg-[#0F0F0F]">
          {/* Left arrow for navigation */}
          <div className="bg-[#262626] p-[10px] m-[10px] rounded-lg cursor-pointer">
            <FaArrowLeft size={12} />
          </div>
          {/* Display pagination indicators */}
          <div className="flex flex-row">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={item}
                className={`my-[12px] text-[20px] font-bold px-[2px] ${
                  index === 0 ? "text-[#e50000]" : ""
                } `}
              >
                -
              </div>
            ))}
          </div>
          {/* Right arrow for navigation */}
          <div className="bg-[#262626] p-[10px] m-[10px] rounded-lg cursor-pointer">
            <FaArrowRight size={12} />
          </div>
        </div>
      </div>
      <HomeCarousel />
    </section>
  );
};

// The HomeMovieCategory component is exported
export default HomeMovieCategory;
