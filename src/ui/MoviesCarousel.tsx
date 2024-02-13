// const MoviesCarousel = () => {
//   return (
//     <section className="mt-[150px] mx-[20px] md:mx-[50px] ">
//       MoviesCarousel
//     </section>
//   );
// };

// export default MoviesCarousel;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles

const MoviesCarousel = () => {
  return (
    <div className="mt-[150px] mb-[100px] mx-[20px] md:mx-[50px]">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {/* Replace with your movie items */}
        <SwiperSlide>Movie 1</SwiperSlide>
        <SwiperSlide>Movie 2</SwiperSlide>
        <SwiperSlide>Movie 3</SwiperSlide>
        {/* ... */}
      </Swiper>
    </div>
  );
};

export default MoviesCarousel;
