import { useState } from "react";
import { Button } from ".";
import { faq } from "../constants";
import { Line } from "../assets";

const Faq = () => {
  const [expandedItems, setExpandedItems] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleItem = (id: number) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <section>
      <div className="flex md:flex-row flex-col md:ml-[100px] mx-[20px] mt-[100px]">
        <div className="flex flex-col">
          <div className="flex text-[28px] font-bold">
            Frequently Asked Questions
          </div>
          <p className="text-neutral-400 text-base font-normal">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>

        <div className="md:mx-[100px] ">
          <Button
            text="Ask a Question"
            image=""
            className="w-[150px] pl-[20px]"
          />
        </div>
      </div>

      <div className="md:grid grid-cols-2 gap-4 px-[10px] md:mx-[100px] mx-[20px] mt-5 font-manrope">
        {faq.map((item, index) => (
          <div key={item.id} className="mb-4">
            <button
              onClick={() => toggleItem(item.id)}
              className="flex justify-between items-center w-full text-left md:pr-[20px]"
            >
              <div className="flex">
                <div>
                  <div className="bg-[#1F1F1F] rounded-md border-[#262626] border p-[15px] mr-[10px] ">
                    {item.num}
                  </div>
                </div>
                <div
                  className={`text-[20px] font-medium md1:my-[15px] ${
                    index === 0 ? "my-[15px] md:my-[0px] " : ""
                  } ${index > 5 ? "lg:my-[0px]" : ""}`}
                >
                  {item.question}
                </div>
              </div>
              <img
                src={expandedItems[item.id] ? item.minus : item.plus}
                className="h-5 w-5 "
              />
            </button>
            {expandedItems[item.id] && (
              <div>
                <p className="mt-2 text-neutral-400 text-base font-normal">
                  {item.answer}
                </p>
                <img src={Line} className="mt-[30px]" />
              </div>
            )}
            <img src={Line} className="mt-[25px]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
