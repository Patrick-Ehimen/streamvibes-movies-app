import { BgImgPhone } from "../../assets";
import { Button } from "..";

const BgImagePhone = () => {
  return (
    <section className="mx-[20px] my-[100px] flex md:hidden">
      <div
        style={{
          backgroundImage: `url(${BgImgPhone})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="border border-[#262626] rounded-lg"
      >
        <div className="my-[100px]">
          <div className="px-[50px] font-bold text-[25px]">
            Start your free trial today!
          </div>
          <div className="font-regular text-[16px] text-neutral-400 font-normal px-[50px]">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </div>
        </div>

        <Button
          text="Start Free Trial"
          image=""
          className="w-fit h-fit my-[100px] mx-[50px] pl-[10px]"
        />
      </div>
    </section>
  );
};

export default BgImagePhone;
