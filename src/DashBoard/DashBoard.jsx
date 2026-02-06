import React from "react";

function Dashboard() {
  return (
    <div className="p-5 bg-gray-100 min-h-screen">

      {/* ================= TOP CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Website Visitors</p>
          <h2 className="text-2xl font-bold">34,945</h2>
          <p className="text-green-500 text-sm">+8% from last month</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Total Revenue</p>
          <h2 className="text-2xl font-bold">₹80K</h2>
          <p className="text-green-500 text-sm">+8% from last month</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Total Customers</p>
          <h2 className="text-2xl font-bold">892</h2>
          <p className="text-green-500 text-sm">+24% from last month</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Total Orders</p>
          <h2 className="text-2xl font-bold">125</h2>
          <p className="text-green-500 text-sm">+2.1% from last month</p>
        </div>

      </div>


      {/* ================= MAIN SECTION ================= */}
      <div className="grid grid-cols-12 gap-6">


        {/* ================= LEFT : ORDER STATS ================= */}
        <div className="col-span-12 lg:col-span-9 bg-white rounded-xl shadow p-5">

          <h2 className="font-semibold mb-4">Order stats</h2>

          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              <thead className="border-b text-gray-600">
                <tr>
                  <th className="py-3 text-left">Sr.</th>
                  <th className="text-left">Product</th>
                  <th>Qty.</th>
                  <th>Status</th>
                  <th>Date & Time</th>
                  <th>Order Type</th>
                </tr>
              </thead>

              <tbody className="text-gray-600">

                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <tr key={i} className="border-b last:border-0">

                    <td className="py-4">{i}</td>

                    <td className="flex items-center gap-3 py-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
                      <span>Product Name</span>
                    </td>

                    <td className="text-center">1x</td>

                    <td className="text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium
                          ${i === 2 && "bg-green-100 text-green-600"}
                          ${i === 3 && "bg-blue-100 text-blue-600"}
                          ${i === 4 && "bg-red-100 text-red-600"}
                          ${(i === 1 || i === 5 || i === 6) && "bg-orange-100 text-orange-600"}
                        `}
                      >
                        {i === 2
                          ? "Ready For Pickup"
                          : i === 3
                            ? "Delivered"
                            : i === 4
                              ? "Returned"
                              : "in Packaging"}
                      </span>
                    </td>

                    <td className="text-center">
                      22/06/2025 Sun <br />
                      <span className="text-xs">11:25 AM</span>
                    </td>

                    <td className="text-center">Cash on Delivery</td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="col-span-12 lg:col-span-3 space-y-6">


          {/* ============ BEST SELLING ============ */}
          <div className="bg-white rounded-xl shadow p-5">

            <h2 className="font-semibold">Best Selling</h2>
            <p className="text-xs text-gray-400 mb-4">5 Categories</p>

            <div className="space-y-3 text-sm">

              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex justify-between text-gray-600"
                >
                  <span>Category {i}</span>
                  <span>245</span>
                </div>
              ))}

            </div>

          </div>


          {/* ============ TODAY ORDERS ============ */}
          <div className="bg-white rounded-xl shadow p-5">

            <h2 className="font-semibold mb-4">Today’s Orders</h2>

            <div className="grid grid-cols-2 gap-4 text-center">

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm">New</p>
                <h3 className="text-2xl font-bold text-green-500">125</h3>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm">Return</p>
                <h3 className="text-2xl font-bold text-orange-500">125</h3>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm">Pending</p>
                <h3 className="text-2xl font-bold text-orange-500">125</h3>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm">Cancelled</p>
                <h3 className="text-2xl font-bold text-red-500">125</h3>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
