import React from "react";

const MainContent = () => {
  const products = [
    {
      name: "Modern Scratch Post",
      price: "$49.99",
      image:
        "https://cdn.usegalileo.ai/sdxl10/2742ba70-3ddf-4982-992b-a5badbbbbeed.png",
    },
    {
      name: "Classic Scratch Post",
      price: "$39.99",
      image:
        "https://cdn.usegalileo.ai/sdxl10/b137067c-9dbb-4a83-86bb-0de967260644.png",
    },
    {
      name: "Scratch Lounge",
      price: "$59.99",
      image:
        "https://cdn.usegalileo.ai/sdxl10/2fd5ea84-94fc-4499-825b-bffe9e8a5188.png",
    },
    {
      name: "Scratch Tower",
      price: "$69.99",
      image:
        "https://cdn.usegalileo.ai/sdxl10/f12be4fd-d3cd-47bd-90df-09e8f8e1f20d.png",
    },
    {
      name: "Scratch Ramp",
      price: "$79.99",
      image:
        "https://cdn.usegalileo.ai/sdxl10/30b1e434-bab3-46f2-bb16-a8203514d22b.png",
    },
  ];

  return (
    <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[300px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/c6003d59-afc2-4993-a7c6-9a0a1c5186ee.png")',
              }}
            >
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                  Katz
                </h1>
                <h2 className="text-white text-sm md:text-base font-normal leading-normal">
                  The best cat scratchers in the world
                </h2>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e88630] text-[#1b140e] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate">Shop Now</span>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div>
                <p className="text-[#1b140e] text-base font-medium leading-normal">
                  {product.name}
                </p>
                <p className="text-[#97704e] text-sm font-normal leading-normal">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
