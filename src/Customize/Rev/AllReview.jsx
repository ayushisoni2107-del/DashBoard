import React, { useState } from "react";
import { Search, Calendar, ChevronDown, Star, Check, Eye } from "lucide-react";

const initialReviews = [
  { id: 1, status: "displayed" },
  { id: 2, status: "displayed" },
  { id: 3, status: "displayed" },
  { id: 4, status: "removed" },
  { id: 5, status: "displayed" },
  { id: 6, status: "displayed" },
];

function AllReview() {
  const [activeTab, setActiveTab] = useState("all");
  const [reviews, setReviews] = useState(initialReviews);

  // Toggle status
  const toggleStatus = (id) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, status: r.status === "displayed" ? "removed" : "displayed" }
          : r
      )
    );
  };

  // Filter by tab
  const filtered =
    activeTab === "all"
      ? reviews
      : reviews.filter((r) => r.status === activeTab);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Tabs */}
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

      <div className="flex gap-10 border-b border-gray-100 mb-6">
        {["all", "displayed", "removed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 capitalize font-medium transition
              ${activeTab === tab
                ? "border-b-2 border-orange-500 text-black"
                : "text-gray-500"
              }`}
          >
            {tab === "displayed"
              ? "Displayed on Website"
              : tab === "removed"
                ? "Removed from website"
                : "All"}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-6">
        {filtered.map((review) => (
          <div
            key={review.id}
            className={`relative rounded-2xl p-3 transition
            ${review.status === "displayed"
                ? "bg-green-50 border border-green-300"
                : "bg-red-50 border border-red-300"
              }`}
          >
            {/* Toggle */}
            <button
              onClick={() => toggleStatus(review.id)}
              className={`absolute top-3 left-3 w-11 h-6 rounded-full flex items-center px-1 transition
              ${review.status === "displayed"
                  ? "bg-green-500 justify-end"
                  : "bg-red-500 justify-start"
                }`}
            >
              <div className="w-4 h-4 bg-white rounded-full shadow" />
            </button>

            {/* Image Placeholder */}
            <div className="w-42 h-62 rounded-xl bg-gray-200 mx-auto mt-8" />

            {/* Content */}
            <div className="text-center mt-4">
              <p className="font-medium text-gray-700">
                Impressed by the Quality !!
              </p>

              {/* Stars */}
              <div className="text-yellow-400 text-lg mt-1">★★★★★</div>

              <p className="text-gray-400 text-sm mt-1">-rena Chaudhari</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllReview;
