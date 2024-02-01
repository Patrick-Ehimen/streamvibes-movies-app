import { BgImgPhone } from "../../assets";

const BgImagePhone = () => {
  return (
    <section className="m-[50px] flex md:hidden">
      <div
        style={{
          backgroundImage: `url(${BgImgPhone})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=""
      >
        ABCD
      </div>
    </section>
  );
};

export default BgImagePhone;
