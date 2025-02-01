import React from "react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-[#ffb400]" : "text-[#f3ede7]"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sharon",
      date: "Aug 12, 2025",
      rating: 5,
      text: "I'm so happy with my purchase. My cat loves it and it's so stylish, it looks great in my living room.",
      avatar:
        "https://cdn.leonardo.ai/users/8b69a4e3-755d-4960-8c7f-fe9de272cb01/generations/a2a59056-089e-4f46-a3ba-ec173744c7ae/segments/3:4:1/Flux_Dev_Highresolution_stock_photo_of_a_serene_Asian_girl_wit_2.jpeg",
    },
    {
      name: "Clara",
      date: "July 31, 2025",
      rating: 5,
      text: "I bought the Snuggle for my senior cat and she loves it. She's been sleeping on it every day since it arrived. Great quality too!",
      avatar:
        "https://cdn.leonardo.ai/users/8b69a4e3-755d-4960-8c7f-fe9de272cb01/generations/28059378-2dfc-4c7d-ab1b-1a1be0fb5ad0/segments/1:4:1/Flux_Dev_Highresolution_stock_photo_of_a_young_adult_Asian_wom_0.jpeg",
    },
    {
      name: "Hannah",
      date: "July 25, 2025",
      rating: 5,
      text: "The Nook is perfect for my two cats, they both love it. It's very sturdy and well made.",
      avatar:
        "https://cdn.leonardo.ai/users/ff652081-5fed-4e79-a45b-72840f72f3db/generations/a272d8bb-7dcc-4530-a556-bc93e5bad654/segments/2:4:1/Flux_Dev_Highresolution_stock_photograph_of_a_young_Asian_girl_1.jpeg",
    },
  ];

  return (
    <section
      id="testimonials"
      className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto scroll-mt-20"
    >
      <h2 className="text-3xl font-bold text-[#1b140e] mb-8 text-center">
        What our customers are saying
      </h2>

      <div className="space-y-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div className="flex items-start gap-4 w-full">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#f47b25] flex-shrink-0"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=ffb400&color=fff`;
                  }}
                />
                <div className="flex flex-col gap-2 flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-bold text-[#1b140e]">
                        {testimonial.name}
                      </h3>
                      <span className="text-sm text-[#9c6c49]">
                        {testimonial.date}
                      </span>
                    </div>
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p className="text-[#1b140e] leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </div>
            {index !== testimonials.length - 1 && (
              <hr className="border-t border-[#f3ede7] my-6" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
