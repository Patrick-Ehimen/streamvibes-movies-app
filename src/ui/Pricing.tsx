import { useState } from "react";
import { pricingPlan } from "../constants";
import { Button } from ".";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly"); // Default to monthly

  const handleMonthlyClick = () => {
    setSelectedPlan("monthly");
  };

  const handleYearlyClick = () => {
    setSelectedPlan("yearly");
  };

  return (
    <section>
      <div className="flex md:flex-row flex-col md:mx-[100px] mx-[20px] mt-[100px]">
        <div className="flex flex-col">
          <div className="flex text-[28px] font-bold">
            Choose the plan tha's right for you
          </div>
          <p className="text-neutral-400 text-base font-normal">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
        <div className="md:mx-[50px] mr-[130px] flex mt-[10px] md:h-fit w-fit rounded-lg bg-[#0F0F0F] border border-[#262626] md1:p-[15px] p-[10px]">
          <div
            className={`px-[15px] p-[10px] cursor-pointer ${
              selectedPlan === "monthly" ? "bg-[#1F1F1F] rounded-lg" : ""
            }`}
            onClick={handleMonthlyClick}
          >
            Monthly
          </div>
          <div
            className={`px-[15px] p-[10px] cursor-pointer ${
              selectedPlan === "yearly" ? "bg-[#1F1F1F] rounded-lg" : ""
            }`}
            onClick={handleYearlyClick}
          >
            Yearly
          </div>
        </div>
      </div>

      <div className="md1:grid grid-cols-3 gap-4 mt-[50px] md1:mx-[100px] md:mx-[50px] mx-[20px]">
        {pricingPlan.map((plan) => (
          <div
            key={plan.id}
            className="border border-[#262626] rounded-lg p-[20px] font-manrope bg-[#1F1F1F] my-[20px]"
          >
            <div className="font-bold text-[20px]">{plan.title}</div>
            <div className="text-neutral-400 text-[16px] font-normal mt-[5px] mb-[15px]">
              {plan.descr}
            </div>
            {/* <div className="">{plan.monthlyPricing}</div> */}
            <div className="flex">
              <span className="font-semibold text-[30px]">
                {selectedPlan === "monthly"
                  ? plan.monthlyPricing
                  : plan.yearlyPricing}
              </span>
              <div className="mt-[15px]">
                {selectedPlan === "monthly" ? "/month" : "/year"}
              </div>
            </div>
            <div className="flex flex-col md:flex-row md1:flex-col lg:flex-row">
              <Button
                text="Free Trial"
                image=""
                className="bg-[#141414] border h-fit border-[#262626] pr-[5px] pl-[10px] w-fit lg:my-[30px] "
              />
              <Button
                text="Paid Plan"
                image=""
                className="lg:ml-[5px] ml-[2px] h-fit border border-red-700 pr-[5px] w-fit pl-[10px] my-[2px] lg:my-[30px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
