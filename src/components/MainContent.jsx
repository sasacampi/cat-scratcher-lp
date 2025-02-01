import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "-25px",
        zIndex: 1,
        top: "35%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 md:w-8 md:h-8 text-[#1b140e] hover:text-[#e88630] transition-colors"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "-25px",
        zIndex: 1,
        top: "35%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 md:w-8 md:h-8 text-[#1b140e] hover:text-[#e88630] transition-colors"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full mx-4 overflow-hidden">
        <div className="flex justify-between items-start p-6 border-b border-[#f3ede7]">
          <h2 className="text-2xl font-bold text-[#1b140e]">{product.name}</h2>
          <button
            onClick={onClose}
            className="text-[#1b140e] hover:text-[#e88630] transition-colors text-2xl"
          >
            &times;
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div
            className="bg-center bg-no-repeat bg-cover aspect-square rounded-xl"
            style={{ backgroundImage: `url(${product.image})` }}
          />

          <div className="space-y-4">
            <p className="text-[#1b140e] text-base">{product.description}</p>
            <p className="text-xl font-bold text-[#1b140e]">
              ${product.price.toFixed(2)}
            </p>
            <div className="space-y-2">
              <button className="w-full bg-[#e88630] text-white py-2 rounded-full hover:bg-[#d87a28] transition-colors">
                Add to Cart
              </button>
              <button className="w-full border border-[#e7dbd0] text-[#1b140e] py-2 rounded-full hover:bg-[#f3ede7] transition-colors">
                Add to Favorites
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://679c628333d3168463268cf1.mockapi.io/api/v1/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#e88630]"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-5xl py-6 px-4">
        <Slider {...settings}>
          {products.map((product) => (
            <div
              key={product.id}
              className="p-2"
              onClick={() => setSelectedProduct(product)}
            >
              <div
                className="w-[220px] h-[220px] bg-center bg-no-repeat bg-cover rounded-xl mx-auto"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="text-center mt-2">
                <p className="text-[#1b140e] text-base font-medium">
                  {product.name}
                </p>
                <p className="text-[#97704e] text-sm font-normal">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductPage;
