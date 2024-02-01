import {
  Hero,
  HomeMovieCategory,
  DeviceAccess,
  Faq,
  Pricing,
  BgImage,
  BgImagePhone,
} from "../ui";

const Home = () => {
  return (
    <section>
      <Hero />
      <HomeMovieCategory />
      <DeviceAccess />
      <Faq />
      <Pricing />
      <BgImage />
      <BgImagePhone />
    </section>
  );
};

export default Home;
