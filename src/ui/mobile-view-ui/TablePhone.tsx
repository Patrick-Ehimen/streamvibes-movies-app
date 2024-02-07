import { useState } from "react";
import { mobilePlansTable } from "../../constants";

const TablePhone = () => {
  // State to manage the selected plan details
  const [selectedPlan, setSelectedPlan] = useState<{
    id: number;
    price: string;
    freeTrial: string;
    content: string;
    devices: string;
    cancelAnytime: string;
    hdr: string;
    dolbyAtoms: string;
    adsFree: string;
    offlineViewing: string;
    familySharing: string;
  } | null>(null);

  // Handler to select a plan based on its index
  const handlePlanClick = (planIndex: number) => {
    setSelectedPlan(mobilePlansTable[planIndex]);
  };

  return (
    <section className="md:hidden block mt-[50px]">
      {/* Buttons to select a plan */}
      <div className="mb-4">
        <div className="rounded-lg justify-center bg-[#0F0F0F] border mx-[20px] border-[#9999] ">
          <button
            onClick={() => handlePlanClick(0)}
            className="py-[20px] pr-[20px] pl-[50px] "
          >
            Basic
          </button>
          <button
            onClick={() => handlePlanClick(1)}
            className="py-[20px] px-[20px] "
          >
            Standard
          </button>
          <button
            onClick={() => handlePlanClick(2)}
            className="py-[20px] px-[20px] "
          >
            Premium
          </button>
        </div>

        <div className="border border-[#9999] rounded-lg  bg-[#0f0f0f] m-[20px] flex-col">
          {/* Display selected plan details if any plan is selected */}
          {selectedPlan && (
            <div className="p-[20px] flex-col">
              <h2>{selectedPlan.price}</h2>
              <p>{selectedPlan.freeTrial}</p>
              <p>{selectedPlan.content}</p>{" "}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TablePhone;
