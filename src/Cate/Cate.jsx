import React from "react";

function Cate() {
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <div className="p-4 md:p-6 bg-gray-50 min-h-screen overflow-x-hidden">

          {/* Main Layout */}
          <div className="flex flex-row gap-8 flex-wrap">

            {/* Left Card */}
            <div className="bg-white w-[360px] h-[630px] rounded p-3">

              <p className="font-semibold">Add Category</p>

              {/* Upload Box */}
              <div className="pt-3">
                <div className="border-dashed border-2 rounded-xl 
                w-[330px] h-[180px] 
                flex flex-col items-center justify-center text-gray-400">

                  <span>📷</span>

                  <button className="bg-black text-white px-5 py-1 rounded mt-2">
                    Upload
                  </button>
                </div>
              </div>

              {/* Category Name */}
              <div className="pt-3">
                <p>Category Name</p>

                <input
                  type="text"
                  placeholder="Gown"
                  className="w-[330px] h-[40px] rounded-lg px-3 py-2 border"
                />
              </div>

              {/* Select Product */}
              <div className="pt-3">
                <p>Select Product</p>

                <div className="w-[330px] h-[40px] bg-gray-200 rounded flex items-center px-2 font-bold">
                  20 products
                </div>
              </div>

              {/* Priority */}
              <div className="pt-3">
                <p>Priority</p>

                <div className="w-[330px] h-[40px] bg-gray-200 rounded flex items-center px-2 font-bold">
                  1
                </div>
              </div>

              {/* Add Product */}
              <div className="pt-4">
                <div className="w-[330px] h-[40px] bg-gray-200 rounded flex items-center px-2 font-bold">
                  Add product
                </div>
              </div>

              {/* Button */}
              <div className="pt-4">
                <button className="bg-orange-600 rounded text-white w-[330px] h-[40px]">
                  Add Category
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex-1">

              <p className="text-2xl mb-3">Categories</p>

              {/* Categories Grid */}
              <div className="flex flex-wrap gap-4">

                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="text-center">

                    <div className="w-[174px] h-[296px] border border-orange-200 rounded-full mx-auto"></div>

                    <p>Gown</p>
                    <p>20 products</p>

                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Cate;
