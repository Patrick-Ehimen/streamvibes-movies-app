import {
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
  CImage,
} from "@coreui/react";

// import "@coreui/coreui/dist/css/coreui.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";

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
    <CCarousel controls indicators>
      <CCarouselItem>
        <CImage className="d-block w-100" src={Avengers} alt="slide 1" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={Kantara} alt="slide 2" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={Stranger} alt="slide 3" />
        <CCarouselCaption className="d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
  );
};

export default MoviesCarousel;
