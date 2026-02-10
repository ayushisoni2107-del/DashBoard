import React from "react";

function Navbar() {
  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* MENU ITEMS  */}
          <div className="bg-white p-5 rounded-xl shadow">

            <h2 className="font-semibold mb-4">
              Navbar Main Menu Items
            </h2>

            <div className="space-y-4">

              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center"
                >

                  {/* Drag Icon + Number */}
                  <div className="md:col-span-1 flex items-center gap-2 text-gray-400">
                    <div className="grid grid-cols-2 gap-1">
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    </div>
                    <span>{i}</span>
                  </div>

                  {/* Name */}
                  <input
                    type="text"
                    placeholder="All Products"
                    className="md:col-span-5 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                  />

                  {/* Link */}
                  <input
                    type="text"
                    placeholder="Link :"
                    className="md:col-span-6 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
              ))}

            </div>
          </div>


          {/*  STORIES / SLIDER  */}
          <div className="bg-white p-5 rounded-xl shadow">

            <div className="flex flex-col md:flex-row gap-6">

              {/* Left Circles */}
              <div className="flex gap-4 flex-wrap">

                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative w-20 h-20 rounded-full bg-black flex items-center justify-center"
                  >
                    <button className="absolute bg-orange-500 text-white px-3 py-1 text-xs rounded">
                      Edit
                    </button>
                  </div>
                ))}

              </div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-gray-200"></div>

              {/* Right Form */}
              <div className="flex-1 space-y-4">

                <div>
                  <label className="text-sm text-gray-500">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Sale"
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500">
                    Link to Navigate
                  </label>
                  <input
                    type="text"
                    placeholder="Sale"
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500">
                    Thumbnail Image
                  </label>

                  <div className="border-dashed border-2 rounded-xl h-32 flex flex-col items-center justify-center text-gray-400">

                    <span>📷</span>

                    <button className="bg-black text-white px-4 py-1 rounded mt-2 text-sm">
                      Upload
                    </button>

                  </div>
                </div>

              </div>

            </div>

          </div>


          {/*  SOCIAL LINKS */}
          <div className="bg-white p-5 rounded-xl shadow">

            <h2 className="font-semibold mb-4">
              Social Media Links
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {["Instagram", "WhatsApp", "Facebook", "YouTube"].map(
                (name, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={`Link to ${name}`}
                    className="border rounded-lg px-3 py-2"
                  />
                )
              )}

            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* OFFERS  */}
          <div className="bg-white p-5 rounded-xl shadow">

            <h2 className="font-semibold mb-4">
              Offers Scrolling Line - Navbar
            </h2>

            <div className="space-y-4">

              <div>
                <label className="text-sm text-gray-500">
                  Offer Text
                </label>

                <input
                  type="text"
                  placeholder="Special Offer this Weekend"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>


              <div className="grid grid-cols-2 gap-3">

                <input
                  type="text"
                  placeholder="10%"
                  className="border rounded-lg px-3 py-2"
                />

                <input
                  type="text"
                  placeholder="₹120"
                  className="border rounded-lg px-3 py-2"
                />

              </div>


              <div className="flex gap-2">

                <input
                  type="text"
                  placeholder="Best Seller"
                  className="flex-1 border rounded-lg px-3 py-2"
                />

                <button className="bg-orange-500 text-white px-4 rounded-lg">
                  Add
                </button>

              </div>


              <div className="flex gap-2">

                <input
                  type="text"
                  placeholder="Select Products"
                  className="flex-1 border rounded-lg px-3 py-2"
                />

                <button className="bg-orange-500 text-white px-4 rounded-lg">
                  Add
                </button>

              </div>


              <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium mt-4">
                Apply
              </button>

            </div>

          </div>


          {/* LOGO  */}
          <div className="bg-white p-5 rounded-xl shadow">

            <h2 className="font-semibold mb-4">
              Logo
            </h2>

            <div className="border-dashed border-2 rounded-xl h-40 flex flex-col items-center justify-center text-gray-400">

              <span>📷</span>

              <button className="bg-black text-white px-5 py-1 rounded mt-2">
                Upload
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar
