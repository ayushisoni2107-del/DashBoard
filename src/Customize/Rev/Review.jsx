import { Search, Calendar, ChevronDown, Star, Check } from "lucide-react";
import { useState } from "react";

export default function Review() {
  const reviews = Array(6).fill({
    title: "Impressed by the Quality !!",
    name: "-rena Chaudhari",
    rating: 4,
  });
  const [selected, setSelected] = useState(false);

  return (
    <div className="min-h-screen bg-[#eef2f6] p-4 md:p-6">
      <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">

        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

          <h2 className="text-lg font-semibold">Review</h2>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-3 w-full lg:w-auto">

            {/* Search */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 w-full md:w-64">
              <Search size={16} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search here..."
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>

            {/* Date From */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 text-sm">
              <span className="text-gray-500">From:</span>
              <span>01/07/2025</span>
              <Calendar size={16} className="text-gray-400" />
            </div>

            {/* Date To */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 text-sm">
              <span className="text-gray-500">To:</span>
              <span>01/07/2025</span>
              <Calendar size={16} className="text-gray-400" />
            </div>

            {/* Last 7 Days Dropdown */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 text-sm cursor-pointer">
              <span>Last 7 days</span>
              <ChevronDown size={16} />
            </div>

            {/* Rating Filter */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 text-sm cursor-pointer">
              <span>1 ★</span>
              <ChevronDown size={16} />
            </div>

          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4
 gap-6 justify-items-center">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between"
            >
              {/* Toggle Circle (ONLY FIRST CARD) */}
              {index === 0 && (
                <button
                  onClick={() => setSelected(!selected)}
                  className={`absolute top-4 left-4 w-4 h-4 rounded-full flex items-center justify-center transition
        ${selected ? "bg-gray-200" : "bg-black"}`}
                >
                  {selected && <Check size={14} className="text-black" />}
                </button>
              )}

              {/* Image Placeholder */}
              <div className="w-42 h-62 bg-gray-100 rounded-xl mb-4 mx-auto" />

              {/* Dots */}
              <div className="flex justify-center gap-1 mb-3">
                <div className="w-1.5 h-1.5 bg-black rounded-full" />
                <div className="w-1.5 h-1.5 bg-black rounded-full" />
                <div className="w-1.5 h-1.5 bg-black rounded-full" />
                <div className="w-1.5 h-1.5 bg-black rounded-full" />
              </div>

              {/* Title */}
              <p className="text-sm font-medium text-center mb-2">
                {review.title}
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
              </div>

              {/* Name */}
              <p className="text-xs text-gray-500 text-center">
                {review.name}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
