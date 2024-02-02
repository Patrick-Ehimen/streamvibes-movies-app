import { BgIMg } from "../../assets";
import { Button } from "..";

const BgImage = () => {
  return (
    <section className="lg:m-[100px] mx-[50px] my-[100px] hidden md:flex   font-manrope">
      <div
        style={{
          backgroundImage: `url(${BgIMg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex-row flex border border-[#262626] rounded-lg w-full"
      >
        <div className="my-[100px] ">
          <div className="px-[50px] font-bold text-[25px]">
            Start your free trial today!
          </div>
          <div className="font-regular text-[16px] text-neutral-400 font-normal px-[50px]">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </div>

          <Button
            text="Start Free Trial"
            image=""
            className="w-fit h-fit my-[100px] mx-[50px] pl-[10px]"
          />
        </div>
      </div>
    </section>
  );
};

export default BgImage;
