import { useState } from "react";
import { Star, Heart } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const ProductMockPage = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div
      className="min-h-screen bg-[#fff]"
      style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}
    >
      <Header />

      <div className="flex justify-center items-center p-8">
        <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 bg-white p-6 rounded-2xl">
          <div className="w-full md:w-1/2">
            <img
              src="https://cdn.usegalileo.ai/sdxl10/17ed968e-642c-4ca4-8136-cd9a5f108b71.png"
              alt="Modern Cat Scratcher Lounge"
              className="rounded-lg border border-[#e8d9ce]"
            />
            <div className="flex mt-4 gap-2">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="w-16 h-16 rounded-md overflow-hidden border-2 border-[#e8d9ce] cursor-pointer hover:border-[#f47b25] transition-colors"
                >
                  <img
                    src="https://cdn.usegalileo.ai/sdxl10/13aef636-0ce7-46bc-a503-d5f15cb9ac38.png"
                    alt={`Thumbnail ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-16 h-16 bg-[#f4ece7] rounded-md flex items-center justify-center cursor-pointer text-[#9c6c49] hover:bg-[#e8d9ce] transition-colors">
                ▶
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-[#1c130d]">
              Modern Cat Scratcher Lounge
            </h2>

            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={20}
                  className="text-[#ffb400] fill-[#ffb400]"
                />
              ))}
              <span className="ml-2 text-[#9c6c49]">(128 reviews)</span>
            </div>

            <p className="text-3xl font-bold text-[#f47b25] mt-2">$89.99</p>

            <p className="text-[#5a4a42] leading-relaxed">
              Crafted with premium materials, this modern cat scratcher doubles
              as stylish furniture while providing your feline friend with the
              perfect scratching surface.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#1c130d]">Materials:</h3>
                <ul className="text-[#5a4a42] list-disc list-inside space-y-1">
                  <li>Recycled cardboard core</li>
                  <li>Natural sisal rope wrapping</li>
                  <li>Solid wood base</li>
                  <li>Non-toxic adhesives</li>
                </ul>
              </div>

              <div className="flex gap-8">
                <div>
                  <h3 className="font-semibold text-[#1c130d]">Dimensions:</h3>
                  <p className="text-[#5a4a42]">30" L × 12" W × 16" H</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1c130d]">Weight:</h3>
                  <p className="text-[#5a4a42]">8.5 lbs</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#2a7f62]">
              <span className="text-lg">✔</span>
              <p className="font-medium">In Stock - Ready to Ship</p>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center border-2 border-[#e8d9ce] rounded-xl">
                <button
                  onClick={decreaseQuantity}
                  className="px-3 py-2 bg-[#f4ece7] hover:bg-[#e8d9ce] text-[#9c6c49] rounded-l-lg transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 text-[#1c130d] w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  className="px-3 py-2 bg-[#f4ece7] hover:bg-[#e8d9ce] text-[#9c6c49] rounded-r-lg transition-colors"
                >
                  +
                </button>
              </div>
              <button className="bg-[#f47b25] text-white px-8 py-3 rounded-xl hover:bg-[#e56a15] transition-colors font-semibold flex-1">
                Add to Cart
              </button>
              <button className="p-3 border-2 border-[#e8d9ce] rounded-xl hover:bg-[#f4ece7] transition-colors">
                <Heart
                  size={24}
                  className="text-[#9c6c49]"
                  fill="currentColor"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductMockPage;
