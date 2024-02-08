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

  const [activePlanIndex, setActivePlanIndex] = useState<number | null>(null);

  // Handler to select a plan based on its index
  const handlePlanClick = (planIndex: number) => {
    setSelectedPlan(mobilePlansTable[planIndex]);
    setActivePlanIndex(planIndex);
  };

  return (
    <section className="md:hidden block mt-[50px]">
      {/* Buttons to select a plan */}
      <div className="mb-4 justify-center">
        <div className="rounded-lg flex font-manrope justify-center space-x-4  bg-[#0F0F0F] border mx-[20px] border-[#9999] ">
          {/* <div className="flex"> */}
          <button
            onClick={() => handlePlanClick(0)}
            className={`py-[20px] ${
              activePlanIndex === 0
                ? "bg-[#262626] my-[10px] px-[15px] rounded-lg"
                : ""
            }`}
          >
            Basic
          </button>
          <button
            onClick={() => handlePlanClick(1)}
            className={`py-[20px] ${
              activePlanIndex === 1
                ? "bg-[#262626] my-[10px] px-[15px] rounded-lg"
                : ""
            }`}
          >
            Standard
          </button>
          <button
            onClick={() => handlePlanClick(2)}
            className={`py-[20px] ${
              activePlanIndex === 2
                ? "bg-[#262626] my-[10px] px-[15px] rounded-lg"
                : ""
            }`}
          >
            Premium
          </button>
          {/* </div> */}
        </div>

        <div className="border border-[#9999] rounded-lg font-manrope bg-[#0f0f0f] m-[20px] flex-col">
          {/* Display selected plan details if any plan is selected */}
          {selectedPlan && (
            <div className="p-[20px] flex-col">
              <div className="flex space-x-10 mb-2">
                <div>
                  <h2 className="text-[#999] font-medium">Price</h2>
                  <p className="text-[#f1f1f3] font-medium">
                    {selectedPlan.price}
                  </p>
                </div>
                <div>
                  <h2 className="text-[#999] font-medium">Free Trial</h2>
                  <p className="text-[#f1f1f3] font-medium">
                    {selectedPlan.freeTrial}
                  </p>
                </div>
              </div>
              <div className="mb-2">
                <h2 className="text-[#999] font-medium">Content</h2>
                <p className="text-[#f1f1f3] font-medium">
                  {selectedPlan.content}
                </p>{" "}
              </div>
              <div className="mb-2">
                <h2 className="text-[#999] font-medium">Devices</h2>
                <p className="text-[#f1f1f3] font-medium">
                  {selectedPlan.devices}
                </p>
              </div>
              <div className="flex space-x-10 mb-2">
                <div>
                  <h2 className="text-[#999] font-medium">Cancel Anytime</h2>
                  <p className="text-[#f1f1f3] font-medium">
                    {selectedPlan.cancelAnytime}
                  </p>
                </div>
                <div>
                  <h2 className="text-[#999] font-medium">HDR</h2>
                  <p className="text-[#f1f1f3] font-medium">
                    {selectedPlan.hdr}
                  </p>
                </div>
              </div>
              <div className="flex space-x-16 mb-2">
                <div>
                  <h2 className="text-[#999] font-medium">Dolby Atoms</h2>
                  <p className="text-[#f1f1f3] font-medium">
                    {selectedPlan.dolbyAtoms}
                  </p>
                </div>
                <div>
                  <h2 className="text-[#999] font-medium">Ad - Free</h2>
                  <p className="text-[#f1f1f3] font-medium">
                    {selectedPlan.adsFree}
                  </p>
                </div>
              </div>
              <div className="flex space-x-10 mb-2">
                <div>
                  <h2 className="text-[#999] font-medium">Offline Viewing</h2>
                  <p className="text-[#f1f1f3] font-medium">
                    {selectedPlan.offlineViewing}
                  </p>
                </div>
                <div>
                  <h2 className="text-[#999] font-medium">Family Sharing</h2>
                  <p className="text-[#f1f1f3] font-medium">
                    {selectedPlan.familySharing}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TablePhone;
