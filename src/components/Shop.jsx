import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filters, setFilters] = useState({
    material: "All",
    minPrice: 0,
    maxPrice: 100,
  });
  const [sortBy, setSortBy] = useState("bestSelling");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://679c628333d3168463268cf1.mockapi.io/api/v1/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter((product) => {
      return (
        (filters.material === "All" || product.material === filters.material) &&
        product.price >= filters.minPrice &&
        product.price <= filters.maxPrice
      );
    })
    .sort((a, b) => {
      if (sortBy === "priceLowHigh") return a.price - b.price;
      if (sortBy === "priceHighLow") return b.price - a.price;
      return b.bestSeller - a.bestSeller;
    });

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#fff] group/design-root overflow-x-hidden"
      style={{
        "--radio-dot-svg":
          "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(244,123,37)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e')",
        fontFamily: 'Epilogue, "Noto Sans", sans-serif',
      }}
    >
      <Header />

      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap gap-2 p-4">
            <Link
              to="/"
              className="text-[#9c6c49] text-base font-medium leading-normal"
            >
              Home
            </Link>
            <span className="text-[#9c6c49] text-base font-medium leading-normal">
              /
            </span>
            <span className="text-[#1c130d] text-base font-medium leading-normal">
              For Cats
            </span>
          </div>

          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-[#1c130d] tracking-light text-[32px] font-bold leading-tight">
                Cat Scratchers
              </p>
              <p className="text-[#9c6c49] text-sm font-normal leading-normal">
                Find the perfect cat scratcher for your furry friend
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex gap-3 p-3 flex-wrap pr-4">
            {["All", "Cardboard", "Sisal", "Wood", "Plastic", "Metal"].map(
              (material) => (
                <button
                  key={material}
                  onClick={() => setFilters({ ...filters, material })}
                  className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl pl-4 pr-4 ${
                    filters.material === material
                      ? "bg-[#f47b25] text-white"
                      : "bg-[#f4ece7]"
                  }`}
                >
                  <p className="text-sm font-medium leading-normal">
                    {material}
                  </p>
                </button>
              )
            )}
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {[
              {
                name: "Cardboard",
                image:
                  "https://cdn.usegalileo.ai/sdxl10/ab034e06-bdc6-44cf-bc8d-8d90fe27d890.png",
              },
              {
                name: "Sisal",
                image:
                  "https://cdn.usegalileo.ai/sdxl10/061da241-00fb-4590-8dd7-a1007915fe2c.png",
              },
              {
                name: "Wood",
                image:
                  "https://cdn.usegalileo.ai/sdxl10/fe15e869-5a20-40ed-80a8-6b69a1d6b181.png",
              },
              {
                name: "Plastic",
                image:
                  "https://cdn.usegalileo.ai/sdxl10/f928dc0a-81a0-4a86-8139-a4aaf8081b4d.png",
              },
              {
                name: "Metal",
                image:
                  "https://cdn.usegalileo.ai/sdxl10/c08e303a-b77f-4d5c-b23b-73b9702edff1.png",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="flex flex-1 gap-3 rounded-lg border border-[#e8d9ce] bg-[#fcfaf8] p-4 items-center"
              >
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
                  style={{ backgroundImage: `url(${category.image})` }}
                ></div>
                <h2 className="text-[#1c130d] text-base font-bold leading-tight">
                  {category.name}
                </h2>
              </div>
            ))}
          </div>

          <h3 className="text-[#1c130d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Sort by
          </h3>
          <div className="flex flex-col gap-3 p-4">
            {[
              { value: "bestSelling", label: "Best Selling" },
              { value: "priceLowHigh", label: "Price (Low to High)" },
              { value: "priceHighLow", label: "Price (High to Low)" },
            ].map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-4 rounded-xl border border-solid border-[#e8d9ce] p-[15px]"
              >
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#e8d9ce] bg-transparent text-transparent checked:border-[#f47b25] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#f47b25]"
                  name="sort-by"
                  value={option.value}
                  checked={sortBy === option.value}
                  onChange={(e) => setSortBy(e.target.value)}
                />
                <div className="flex grow flex-col">
                  <p className="text-[#1c130d] text-sm font-medium leading-normal">
                    {option.label}
                  </p>
                </div>
              </label>
            ))}
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col gap-3 pb-3 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
                <div>
                  <p className="text-[#1c130d] text-base font-medium leading-normal">
                    {product.name}
                  </p>
                  <p className="text-[#9c6c49] text-sm font-normal leading-normal">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* i wanna change it later bc its not the way i want it to be */}
          {selectedProduct && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <h2 className="text-2xl font-bold mt-4">
                  {selectedProduct.name}
                </h2>
                <p className="text-[#f47b25] text-xl mt-2">
                  ${selectedProduct.price.toFixed(2)}
                </p>
                <div className="mt-4 space-y-2">
                  <p>
                    <strong>Material:</strong> {selectedProduct.material}
                  </p>
                  <p>
                    <strong>Size:</strong> {selectedProduct.size}
                  </p>
                  <p>
                    <strong>Color:</strong> {selectedProduct.color}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="mt-4 bg-[#f47b25] text-white px-4 py-2 rounded hover:bg-[#e56a14] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* this is the pagination and its non functional  */}
          <div className="flex items-center justify-center p-4">
            <a href="#" className="flex size-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
              </svg>
            </a>
            {[1, 2, 3, 4, 5].map((page) => (
              <a
                key={page}
                className={`text-sm font-${
                  page === 1 ? "bold" : "normal"
                } leading-normal flex size-10 items-center justify-center text-[#1c130d] rounded-full ${
                  page === 1 ? "bg-[#f4ece7]" : ""
                }`}
                href="#"
              >
                {page}
              </a>
            ))}
            <a href="#" className="flex size-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
