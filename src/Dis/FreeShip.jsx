import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FreeShip() {
  const navigate = useNavigate();

  const [method, setMethod] = useState("code");
  const [applyType, setApplyType] = useState("collection");

  return (
    <div className="p-6 bg-[#f6f7f8] min-h-screen">

      <h2 className="text-xl font-semibold mb-6">Create Product Discount</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Form */}
        <div className="lg:col-span-2 space-y-6">

          {/* Amount Section */}
          <div className="bg-[#f3f6f9] p-5 rounded-xl">
            <h3 className="font-semibold mb-4">Free Shiping</h3>

            <div className="flex gap-6 mb-3 text-sm">
              <label className="flex items-center gap-2">Selected :
                <input
                  type="radio"
                  checked={method === "code"}
                  onChange={() => setMethod("code")}
                />
                Discount Code
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={method === "auto"}
                  onChange={() => setMethod("auto")}
                />
                Automatic Discount
              </label>
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Discount Code"
                className="flex-1 px-4 py-2 border border-gray-100 rounded-lg focus:outline-none"
              />

              <button
                onClick={() => navigate("/productpage")}
                className="bg-orange-500 text-white px-5 rounded-lg">
                Generate
              </button>
            </div>

            <p className="text-green-500 text-xs mt-2">
              Customer must add this code at checkout.
            </p>
          </div>

          {/* Add Value */}
          <div className="bg-[#f3f6f9] p-5 rounded-xl">
            <h3 className="font-semibold mb-4">Minimum purchase requirement</h3>

            <div className="flex gap-3">
              <input
                type="number"
                placeholder="Minimum purchase amount"
                className="w-90 px-4 py-2 border border-gray-100 rounded-lg focus:outline-none"
              />

              <span className="text-orange-500 self-center">or</span>

              <input
                type="number"
                placeholder="Minimum quantity of items "
                className="w-90 px-4 py-2 border border-gray-100 rounded-lg focus:outline-none"
              />
            </div>

          </div>

          <div className="bg-[#f3f6f9] p-5 rounded-xl">
            <h3 className="font-semibold mb-3">Combinations</h3>
            <h3>CODE55 <span>combined with:</span></h3>

            <div className="flex gap-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked /> Product Discount
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" /> Order Discount
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" /> Shipping Discount
              </label>

            </div>
          </div>

          {/* Active Dates */}
          <div className="bg-[#f3f6f9] p-5 rounded-xl">
            <h3 className="font-semibold mb-4">Active Dates</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="text-xs">Start Date</label>
                <div className="flex items-center gap-2 border border-gray-100 px-3 py-2 rounded-lg bg-gray-200">
                  <Calendar size={16} className="text-orange-500" />
                  <input type="date" className="w-full outline-none" />
                </div>
              </div>

              <div>
                <label className="text-xs">Start Time</label>
                <div className="flex items-center gap-2 border border-gray-100 px-3 py-2 rounded-lg bg-gray-200">
                  <Clock size={16} className="text-orange-500" />
                  <input type="time" className="w-full outline-none" />
                </div>
              </div>

              <div>
                <label className="text-xs">End Date</label>
                <div className="flex items-center gap-2 border border-gray-100 px-3 py-2 rounded-lg bg-gray-200">
                  <Calendar size={16} className="text-orange-500" />
                  <input type="date" className="w-full outline-none" />
                </div>
              </div>

              <div>
                <label className="text-xs">End Time</label>
                <div className="flex items-center gap-2 border border-gray-100 px-3 py-2 rounded-lg bg-gray-200">
                  <Clock size={16} className="text-orange-500" />
                  <input type="time" className="w-full outline-none" />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Right Summary */}
        <div className="bg-[#f3f6f9] p-5 rounded-xl h-fit">
          <h3 className="font-semibold mb-4">Free Shiping</h3>

          <div className="space-y-3 text-sm text-gray-600">

            <div>
              <p className="font-medium text-black">Value</p>
              <p>20%</p>
            </div>

            <div>
              <p className="font-medium text-black">Minimum purchase requirement</p>
              <p>2 products</p>
            </div>

            <div>
              <p className="font-medium text-black">Combinations</p>
              <p>Combined with Order Discount</p>
            </div>

          </div>

        </div>


      </div>
      <div className="flex justify-end gap-4 pt-4">
        <button
          className="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg"
        >
          Cancel
        </button>

        <button
          onClick={() => navigate("/productpage")}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg"
        >
          Save
        </button>
      </div>
    </div >
  );
}
