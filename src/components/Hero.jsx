import React from "react";

export default function Header() {
  const backgroundStyle = {
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/52ec1724-924e-49a7-b51b-1bbcb7e6eb57.png")',
    backgroundSize: "110%",
    backgroundPosition: "center",
  };
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col flex-1 w-full">
        {" "}
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
              style={backgroundStyle}
            >
              <HeaderContent />
              <ShopNowButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="flex flex-col gap-2 text-left">
      <h1 className="text-white text-6xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
        Katz
      </h1>
      <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
        The best cat scratchers in the world.
      </h2>
    </div>
  );
}

function ShopNowButton() {
  return (
    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#f47b25] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
      <span className="truncate">Shop Now</span>
    </button>
  );
}
