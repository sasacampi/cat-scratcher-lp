import React from "react";

const Unique = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <h2 className="text-[#181511] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
          Cat Climbers
        </h2>

        <h2 className="text-[#181511] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Why choose a cat climber?
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {[
            "https://cdn.usegalileo.ai/sdxl10/17ed968e-642c-4ca4-8136-cd9a5f108b71.png",
            "https://cdn.usegalileo.ai/sdxl10/e26743eb-db76-4d25-a2ed-c34c0c9c8c13.png",
            "https://cdn.usegalileo.ai/sdxl10/23ea9b0c-cd7b-499a-8366-d975eb8b5eb6.png",
            "https://cdn.usegalileo.ai/sdxl10/4ae74a21-63f0-4333-9af0-896808da6997.png",
          ].map((imageUrl, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {[
            "Save space and reduce clutter",
            "Provide your cat with exercise",
            "Promote good scratching habits",
            "Create a cozy spot for your cat to rest",
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-1 gap-3 rounded-lg border border-[#e6e1db] bg-white p-4 items-center"
            >
              <div className="text-[#181511]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              <h2 className="text-[#181511] text-base font-bold leading-tight">
                {feature}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Unique;
