import React from "react";
import { Link } from "react-router-dom";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-6 h-6 ${
            index < rating ? "text-[#e88630]" : "text-[#f3ede7]"
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
      name: "Maggie",
      date: "Aug 12, 2025",
      rating: 5,
      text: "I'm so happy with my purchase. My cat loves it and it's so stylish, it looks great in my living room.",
      avatar: "https://example.com/avatars/maggie.jpg",
    },
    {
      name: "Linda",
      date: "July 31, 2025",
      rating: 5,
      text: "I bought the Snuggle for my senior cat and she loves it. She's been sleeping on it every day since it arrived. Great quality too!",
      avatar: "https://example.com/avatars/maggie.jpg",
    },
    {
      name: "Sharon",
      date: "July 25, 2025",
      rating: 5,
      text: "The Nook is perfect for my two cats, they both love it. It's very sturdy and well made.",
      avatar: "https://example.com/avatars/maggie.jpg",
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
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#e88630] flex-shrink-0"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=e88630&color=fff`;
                  }}
                />
                <div className="flex flex-col gap-2 flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-bold text-[#1b140e]">
                        {testimonial.name}
                      </h3>
                      <span className="text-sm text-[#97704e]">
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
