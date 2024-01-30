import { homeCarousel } from "../../constants";
import { Carousel, MobileCarousel } from "../index";

const ActionCarouselComponent: React.FC = () => {
  return (
    <div>
      <Carousel items={homeCarousel} />
      <MobileCarousel items={homeCarousel} />
    </div>
  );
};

export default ActionCarouselComponent;
