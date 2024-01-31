import { deviceAccess } from "../constants";

const DeviceAccess = () => {
  return (
    <section className="font-manrope mt-[80px] md:ml-[100px] ml-[20px] mr-[50px]">
      <div>
        <div className="text-[20px] font-bold">
          We Provide you streaming experience across various devices.
        </div>
        <div className="text-neutral-400 text-base font-normal xl:w-[1000px]">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </div>
      </div>

      <div className="mt-[50px] font-monrope md:grid grid-cols-3 gap-4">
        {deviceAccess.map((item) => (
          <div
            key={item.id}
            className="border m-[10px] border-[#262626] rounded-lg p-5  consolFade"
          >
            <div className="flex">
              <div className="mx-2 bg-[#1F1F1F] p-2 rounded-md border-[#262626]">
                <img src={item.img} alt={item.title} />
              </div>
              <h2 className="py-[5px] text-xl font-semibold">{item.title}</h2>
            </div>
            <p className="p-[10px] text-neutral-400 text-base font-normal">
              {item.para}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeviceAccess;
