import { HomeCarousel } from "../index";
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

        <div className="mx-[100px] hidden md:flex">ABC</div>
      </div>
      <HomeCarousel />
    </section>
  );
};

export default HomeMovieCategory;
